// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class PostCreated extends Entity {
  constructor(id: Bytes) {
    super();
    this.set("id", Value.fromBytes(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save PostCreated entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.BYTES,
        `Entities of type PostCreated must have an ID of type Bytes but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("PostCreated", id.toBytes().toHexString(), this);
    }
  }

  static loadInBlock(id: Bytes): PostCreated | null {
    return changetype<PostCreated | null>(
      store.get_in_block("PostCreated", id.toHexString())
    );
  }

  static load(id: Bytes): PostCreated | null {
    return changetype<PostCreated | null>(
      store.get("PostCreated", id.toHexString())
    );
  }

  get id(): Bytes {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set id(value: Bytes) {
    this.set("id", Value.fromBytes(value));
  }

  get ownerId(): BigInt {
    let value = this.get("ownerId");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set ownerId(value: BigInt) {
    this.set("ownerId", Value.fromBigInt(value));
  }

  get contentURI(): string {
    let value = this.get("contentURI");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set contentURI(value: string) {
    this.set("contentURI", Value.fromString(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }
}

export class PostContent extends Entity {
  constructor(id: Bytes) {
    super();
    this.set("id", Value.fromBytes(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save PostContent entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.BYTES,
        `Entities of type PostContent must have an ID of type Bytes but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("PostContent", id.toBytes().toHexString(), this);
    }
  }

  static loadInBlock(id: Bytes): PostContent | null {
    return changetype<PostContent | null>(
      store.get_in_block("PostContent", id.toHexString())
    );
  }

  static load(id: Bytes): PostContent | null {
    return changetype<PostContent | null>(
      store.get("PostContent", id.toHexString())
    );
  }

  get id(): Bytes {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set id(value: Bytes) {
    this.set("id", Value.fromBytes(value));
  }

  get hash(): string {
    let value = this.get("hash");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set hash(value: string) {
    this.set("hash", Value.fromString(value));
  }

  get content(): string {
    let value = this.get("content");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set content(value: string) {
    this.set("content", Value.fromString(value));
  }
}

export class Profile extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Profile entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Profile must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Profile", id.toString(), this);
    }
  }

  static loadInBlock(id: string): Profile | null {
    return changetype<Profile | null>(store.get_in_block("Profile", id));
  }

  static load(id: string): Profile | null {
    return changetype<Profile | null>(store.get("Profile", id));
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get profileId(): BigInt {
    let value = this.get("profileId");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set profileId(value: BigInt) {
    this.set("profileId", Value.fromBigInt(value));
  }

  get creator(): Bytes {
    let value = this.get("creator");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set creator(value: Bytes) {
    this.set("creator", Value.fromBytes(value));
  }

  get to(): Bytes {
    let value = this.get("to");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set to(value: Bytes) {
    this.set("to", Value.fromBytes(value));
  }

  get handle(): string {
    let value = this.get("handle");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set handle(value: string) {
    this.set("handle", Value.fromString(value));
  }

  get imageURI(): string {
    let value = this.get("imageURI");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set imageURI(value: string) {
    this.set("imageURI", Value.fromString(value));
  }

  get followModule(): Bytes {
    let value = this.get("followModule");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set followModule(value: Bytes) {
    this.set("followModule", Value.fromBytes(value));
  }

  get followModuleReturnData(): Bytes {
    let value = this.get("followModuleReturnData");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set followModuleReturnData(value: Bytes) {
    this.set("followModuleReturnData", Value.fromBytes(value));
  }

  get followNFTURI(): string {
    let value = this.get("followNFTURI");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set followNFTURI(value: string) {
    this.set("followNFTURI", Value.fromString(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get profileMetadata(): ProfileMetadataLoader {
    return new ProfileMetadataLoader(
      "Profile",
      this.get("id")!.toString(),
      "profileMetadata"
    );
  }
}

export class ProfileMetadata extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save ProfileMetadata entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type ProfileMetadata must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("ProfileMetadata", id.toString(), this);
    }
  }

  static loadInBlock(id: string): ProfileMetadata | null {
    return changetype<ProfileMetadata | null>(
      store.get_in_block("ProfileMetadata", id)
    );
  }

  static load(id: string): ProfileMetadata | null {
    return changetype<ProfileMetadata | null>(store.get("ProfileMetadata", id));
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get name(): string {
    let value = this.get("name");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set name(value: string) {
    this.set("name", Value.fromString(value));
  }

  get description(): string {
    let value = this.get("description");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set description(value: string) {
    this.set("description", Value.fromString(value));
  }

  get animation_url(): string {
    let value = this.get("animation_url");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set animation_url(value: string) {
    this.set("animation_url", Value.fromString(value));
  }

  get image(): string {
    let value = this.get("image");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set image(value: string) {
    this.set("image", Value.fromString(value));
  }

  get profile(): string | null {
    let value = this.get("profile");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set profile(value: string | null) {
    if (!value) {
      this.unset("profile");
    } else {
      this.set("profile", Value.fromString(<string>value));
    }
  }
}

export class ProfileMetadataLoader extends Entity {
  _entity: string;
  _field: string;
  _id: string;

  constructor(entity: string, id: string, field: string) {
    super();
    this._entity = entity;
    this._id = id;
    this._field = field;
  }

  load(): ProfileMetadata[] {
    let value = store.loadRelated(this._entity, this._id, this._field);
    return changetype<ProfileMetadata[]>(value);
  }
}