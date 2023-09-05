import {
	Bytes,
	dataSource,
	DataSourceContext,
	DataSourceTemplate,
	log,
	ipfs,
	json,
} from "@graphprotocol/graph-ts";
import {
	PostCreated as PostCreatedEvent,
	ProfileCreated as ProfileCreatedEvent,
} from "../generated/Contract/Contract";
import {
	PostContent,
	PostCreated,
	Profile,
	ProfileMetadata,
} from "../generated/schema";

const POST_ID_KEY = "postID";

export function handlePostCreated(event: PostCreatedEvent): void {
	let entity = new PostCreated(
		Bytes.fromUTF8(
			event.params.profileId.toString() +
				"-" +
				event.params.pubId.toString()
		)
	);

	entity.ownerId = event.params.profileId;
	entity.contentURI = event.params.contentURI;
	entity.timestamp = event.params.timestamp;

	entity.save();

	let arweaveIndex = entity.contentURI.indexOf("arweave.net/");
	let ipfsIndex = entity.contentURI.indexOf("/ipfs/");

	if (arweaveIndex == -1 && ipfsIndex == -1) return;

	let context = new DataSourceContext();
	context.setBytes(POST_ID_KEY, entity.id);

	if (arweaveIndex != -1) {
		let hash = entity.contentURI.substr(arweaveIndex + 12);
		DataSourceTemplate.createWithContext("ArweaveContent", [hash], context);

		return;
	}

	if (ipfsIndex != -1) {
		let hash = entity.contentURI.substr(ipfsIndex + 6);
		DataSourceTemplate.createWithContext("IpfsContent", [hash], context);
	}
}

export function handlePostContent(content: Bytes): void {
	let hash = dataSource.stringParam();
	let ctx = dataSource.context();
	let id = ctx.getBytes(POST_ID_KEY);

	log.info("HASH XXX: hash: {}", [hash]);
	log.info("ID YYY XXX: YYY: {}", [id.toHexString()]);
	// log.info("CTX XXX: ctx: {}", [ctx.entries.toString()]);

	let post = new PostContent(id);
	post.hash = hash;
	post.content = content.toString();
	post.save();
}

export function handleProfileCreated(event: ProfileCreatedEvent): void {
	let entity = Profile.load(event.params.profileId.toString());

	if (!entity) {
		entity = new Profile(event.params.profileId.toString());

		entity.profileId = event.params.profileId;
		entity.creator = event.params.creator;
		entity.to = event.params.to;
		entity.handle = event.params.handle;
		entity.imageURI = event.params.imageURI;
		entity.followModule = event.params.followModule;
		entity.followModuleReturnData = event.params.followModuleReturnData;
		entity.followNFTURI = event.params.followNFTURI;
		entity.timestamp = event.params.timestamp;
	}

	let profileUri = event.params.followNFTURI;

	log.info("0 XXX: profileUri: {}", [profileUri]);
	let stringWithoutPrefix = profileUri.replace("ipfs://", "");
	log.info(
		"00 XXX: stringWithoutPrefix and eventually the profileMetadataID: {}",
		[stringWithoutPrefix]
	);

	DataSourceTemplate.create("ProfileMetadata", [stringWithoutPrefix]);

	entity.save();
}

export function handleProfileMetadata(content: Bytes): void {
	let entity = new ProfileMetadata(dataSource.stringParam());

	log.info("2 XXX: profileMetadataId: {}", [entity.id]);
	// log.info("3 XXX: profileMetadata name: {}", [profileMetadata.name]);

	const value = json.fromBytes(content).toObject();

	log.info("4 XXX:  {}", ["potato"]);

	if (value) {
		log.info("5 XXX:  {}", ["we have value"]);
		const name = value.get("name");
		const description = value.get("description");
		const animation_url = value.get("animation_url");
		const image = value.get("image");

		if (name && description && animation_url && image) {
			log.info("6 XXX:  {}", ["we have all the values"]);
			entity.name = name.toString();
			entity.description = description.toString();
			entity.animation_url = animation_url.toString();
			entity.image = image.toString();

			log.info("7 XXX: THE THINGS  {}{}{}{}", [
				entity.name,
				entity.description,
				entity.animation_url,
				entity.image,
			]);
		}
		entity.save();
	}
}
