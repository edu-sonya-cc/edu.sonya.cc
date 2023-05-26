/// <reference path="../../src/types/dom.d.ts" />
/// <reference path="../../src/types/global.d.ts" />
/// <reference path="../../src/types/storage.d.ts" />
export declare abstract class ActualPageBase {
  protected abstract initTitleElement(): void;
  protected abstract initMainElement(): void;
  init(): void;
}
