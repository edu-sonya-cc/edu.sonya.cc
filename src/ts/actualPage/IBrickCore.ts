/**
 * <en></en>
 * <zh_cn></zh_cn>
 * <zh_tw></zh_tw>
 */
export interface IBrickCore {
  init(configCoreWrapElement: HTMLDivElement): void;
  download(): void;
  print(): void;
  // share(): void;
  // sponsor(): void;
  build(): void;

  loadConfig(): void;
  // saveConfig(): void;

  loadDefaultConfig(): void;
  loadConfigFromLocal(): void;
  // saveConfigToLocal(): void;

  getData(): object;
  setData(newData: object): void;
}
