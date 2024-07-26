import { getAssetPath } from "@/functions/assetPath"

export const BuyMeCoffee = () => {
  return (
    <div className="flex flex-col items-center gap-8 py-4">
      <a
        href="https://www.buymeacoffee.com/ysuna"
        target="_blank"
        className="rounded-xl shadow-lg hover:scale-105 duration-150"
      >
        <img
          src={getAssetPath("/assets/coffee_button.webp")}
          alt="Buy Me A Coffeeのbutton"
          width={200}
          height={60}
        />
      </a>
    </div>
  )
}
