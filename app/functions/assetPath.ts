// /app/public配下のファイルはビルド時にはdist直下にコピーされる
export const getAssetPath = (path: string) => {
  return import.meta.env.PROD ? path : `/app/public${path}`
}
