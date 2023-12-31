import {
	Bytes,
	dataSource,
	DataSourceContext,
	DataSourceTemplate,
	log,
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
	let context = dataSource.context();
	let id = context.getBytes(POST_ID_KEY);

	let post = new PostContent(id);
	post.hash = hash;
	post.content = content.toString();
	post.save();
}

export function handleProfileCreated(event: ProfileCreatedEvent): void {
	let profileId = event.params.followNFTURI.replace("ipfs://", "").toString();

	let entity = Profile.load(profileId);

	if (!entity) {
		entity = new Profile(profileId);

		entity.creator = event.params.creator;
		entity.to = event.params.to;
		entity.handle = event.params.handle;
		entity.imageURI = event.params.imageURI;
		entity.followModule = event.params.followModule;
		entity.followModuleReturnData = event.params.followModuleReturnData;
		entity.followNFTURI = event.params.followNFTURI;
		entity.timestamp = event.params.timestamp;
	}

	DataSourceTemplate.create("ProfileMetadata", [profileId]);

	entity.save();
}

export function handleProfileMetadata(content: Bytes): void {
	let entity = new ProfileMetadata(dataSource.stringParam());

	const value = json.fromBytes(content).toObject();

	if (value) {
		const name = value.get("name");
		const description = value.get("description");
		const animation_url = value.get("animation_url");
		const image = value.get("image");

		if (name && description && animation_url && image) {
			entity.name = name.toString();
			entity.description = description.toString();
			entity.animation_url = animation_url.toString();
			entity.image = image.toString();
			entity.profile = entity.id;

			/* 
      
      Mock DataSourceTemplate Demo

      If we create a hypothetical 'entity.nestedHash' that is another hash that comes from the originally indexed file, we can use this to create another DataSourceTemplate from within this File Data Source Handler.

      // entity.nestedHash = nestedHash.toString();

			//DataSourceTemplate.create("FileDataSourceMetadata", [entity.nestedHash]);
       
      */
		}
		entity.save();
	}
}
