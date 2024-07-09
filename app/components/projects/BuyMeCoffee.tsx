import { getAssetPath } from "@/functions/assetPath"

export const BuyMeCoffee = () => {
  return (
    <div className="flex flex-col items-center gap-8 py-4">
      {/* <img
        src={getAssetPath("/assets/coffee.webp")}
        className="text-white"
        alt=""
        width={400}
        height={100}
        fit="contain"
      /> */}
      <a
        href="https://www.buymeacoffee.com/ysuna"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-xl shadow-lg"
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
