import { EncodeObject } from "@cosmjs/proto-signing";

import { TypedDataTypes, TypedDataTypesMsgValue, generateTypedDataTypes } from "./types";

export class Registry {
  private readonly types: Map<string, TypedDataTypesMsgValue>;

  public constructor(customTypes: Iterable<[string, TypedDataTypesMsgValue]>) {
    this.types = new Map<string, TypedDataTypesMsgValue>([...customTypes]);
  }

  public register(typeUrl: string, type: TypedDataTypesMsgValue): void {
    this.types.set(typeUrl, type);
  }

  public generateTypedDataTypes(encodeObject: EncodeObject): TypedDataTypes {
    const types = this.types.get(encodeObject.typeUrl);
    if (!types) {
      throw new Error(`Unregistered type url: ${encodeObject.typeUrl}`);
    }
    return generateTypedDataTypes(types);
  }
}
