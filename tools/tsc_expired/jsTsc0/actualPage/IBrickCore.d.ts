/**
 * <en></en>
 * <zh_cn></zh_cn>
 * <zh_tw></zh_tw>
 */
export interface IBrickCore {
  init(configCoreWrapElement: HTMLDivElement): void;
  download(): void;
  print(): void;
  build(): void;
  loadConfig(): void;
  loadDefaultConfig(): void;
  loadConfigFromLocal(): void;
  getData(): object;
  setData(newData: object): void;
}
