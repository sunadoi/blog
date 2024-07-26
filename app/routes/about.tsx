import { Card } from "@/components/parts/Card"
import { GitHubIcon } from "@/components/parts/icons/GitHub"
import { RSSIcon } from "@/components/parts/icons/RSS"
import { SizumeIcon } from "@/components/parts/icons/Sizume"
import { XIcon } from "@/components/parts/icons/X"
import { BuyMeCoffee } from "@/components/projects/BuyMeCoffee"
import { getAssetPath } from "@/functions/assetPath"
import { createRoute } from "honox/factory"

export default createRoute(async (c) => {
  return c.render(
    <div class="grid place-items-center gap-10 my-10 mx-4">
      <div>
        <img
          src={getAssetPath("/assets/me.webp")}
          alt="icon"
          width={200}
          height={200}
        />
      </div>
      <div class="w-full max-w-md">
        <Card>
          <div class="flex flex-col gap-8">
            <h1 class="border-b pb-2">Profile</h1>
            <div class="flex items-center gap-8">
              <h2>@すな</h2>
              <a
                href="https://x.com/suna_tech"
                target="_blank"
                rel="noreferrer"
              >
                <div class="w-6 hover:scale-110 duration-150">
                  <XIcon />
                </div>
              </a>
              <a
                href="https://github.com/sunadoi"
                target="_blank"
                rel="noreferrer"
              >
                <div class="w-6 hover:scale-110 duration-150">
                  <GitHubIcon />
                </div>
              </a>
              <a href="https://sizu.me/suna" target="_blank" rel="noreferrer">
                <div class="w-6 hover:scale-110 duration-150">
                  <SizumeIcon />
                </div>
              </a>
            </div>
            <div class="flex flex-col gap-1">
              <h3>好きな技術</h3>
              <p>React / TypeScript / Go</p>
            </div>
            <div class="flex flex-col gap-1">
              <h3>得意なこと</h3>
              <p>リファクタリング / テスト設計 / 目grep</p>
            </div>
            <div class="flex flex-col gap-1">
              <h3>趣味</h3>
              <p>大人になってから始めたピアノ 🎹</p>
            </div>
            <div class="flex flex-col gap-1 leading-8">
              <h3>経歴</h3>
              <p>・北海道大学大学院薬学研究院修了</p>
              <p>・製薬会社で数年科学者として新薬研究に従事</p>
              <p>・2020年からソフトウェアエンジニア</p>
            </div>
          </div>
        </Card>
      </div>
      <div class="w-full max-w-md">
        <Card>
          <div class="flex flex-col gap-8 w-full max-w-md">
            <div class="flex items-center gap-4 border-b pb-2">
              <h1>Site</h1>
              <a href="/feed.xml">
                <div class="w-6 hover:scale-110 duration-150">
                  <RSSIcon />
                </div>
              </a>
            </div>
            <div class="leading-8">
              <p>このサイトはHonoXで作られています</p>
              <p>月一程度の更新が目標です</p>
              <br />
              <p>
                記事が参考になったという方は、以下からサポートいただけると次の記事書くモチベになりますのでよろしくお願いします☕
              </p>
              <BuyMeCoffee />
            </div>
          </div>
        </Card>
      </div>
    </div>,
    {
      title: "About",
    },
  )
})
