// MobileStorageUtils.d.ts
import { PersistenceError } from "@snickerdoodlelabs/objects";
import { IStorageUtils } from "@snickerdoodlelabs/utils";
import { ResultAsync } from "neverthrow";

declare class MobileStorageUtils implements IStorageUtils {
  public remove<T = any>(key: string): ResultAsync<void, PersistenceError>;
  public write<T>(key: string, value: T): ResultAsync<void, PersistenceError>;
  public read<T>(key: string): ResultAsync<T | null, PersistenceError>;
  public clear(): ResultAsync<void, PersistenceError>;
}

export default MobileStorageUtils;
