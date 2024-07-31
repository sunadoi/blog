import { getAssetPath } from "@/functions/assetPath"

export const LinuxIcon = () => {
  return (
    <img
      src={getAssetPath("/assets/linux.webp")}
      alt="Linux Icon"
      width="100%"
      height="100%"
    />
  )
}
