import Link from "next/link";
import Script from "next/script";

import * as Icons from "@saasfly/ui/icons";

import { XBlogArticle } from "~/components/blog-card";
import { Comments } from "~/components/comments";
import { DocumentGuide } from "~/components/document-guide";
import { FeaturesCard } from "~/components/features-card";
import { Meteorss } from "~/components/meteors-card";
import { Questions } from "~/components/questions";
import ShimmerButton from "~/components/shimmer-button";
import { TypewriterEffectSmooths } from "~/components/typewriterEffectSmooth";
import { WobbleCardShow } from "~/components/wobble";
import { WordReveal } from "~/components/word-reveal";
import type { Locale } from "~/config/i18n-config";
import { getDictionary } from "~/lib/get-dictionary";
import type { Meteor } from "~/types/meteors";

const meteors_data: Meteor = {
  name: "Join our Slack",
  description:
    "Join our Slack server to chat with other developers and get help or email us at support@execefficiency.ai.",
  button_content: "Chat with us",
  url: "https://join.slack.com/t/execubot/shared_invite/zt-2wwxunhxw-DFRBdgHkHSJHInK77UxBzg",
};

export default async function IndexPage({
  params: { lang },
}: {
  params: {
    lang: Locale;
  };
}) {
  const dict = await getDictionary(lang);

  return (
    <>
      <Script
        defer
        src="https://assets.onedollarstats.com/stonks.js"
        id="stonks"
      />
      <section className="w-full px-8 sm:px-48 md:px-48 xl:h-[100vh] xl:px-48">
        <div className="grid grid-cols-1 gap-10 pb-10 md:pb-40 xl:grid-cols-2">
          <div className="flex flex-col items-start">
            <div className="flex flex-col pt-4 md:pt-28 lg:pt-28 xl:pt-28">
              <DocumentGuide>
                {dict.marketing.introducing || "Introducing Execubot"}
              </DocumentGuide>

              <div className="mt-6">
                <h1 className="relative mb-6 max-w-4xl text-left text-4xl font-bold dark:text-zinc-100 sm:text-7xl md:text-7xl xl:text-7xl">
                  {dict.marketing.title ||
                    "Execubot: Get in the details without micromanaging"}
                </h1>
              </div>

              <div>
                <span className="text-zinc-500 sm:text-xl">
                  {dict.marketing.sub_title ||
                    ""}
                </span>
                <TypewriterEffectSmooths />
              </div>

              <div className="mb-4 mt-6 flex w-full flex-col justify-center space-y-4 sm:flex-row sm:justify-start sm:space-x-8 sm:space-y-0">
                <Link href={`${lang}/waitlist`}>
                  <ShimmerButton className="mx-auto flex justify-center">
                    <span className="z-10 w-48 whitespace-pre bg-gradient-to-b from-black from-30% to-gray-300/80 bg-clip-text text-center text-sm font-semibold leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 dark:text-transparent">
                      {dict.marketing.get_started}
                    </span>
                  </ShimmerButton>
                </Link>

                <Link
                  href="https://github.com/Stone-Table/ExecuBot-Web"
                  target="_blank"
                >
                  <div className="flex h-full items-center justify-center">
                    <Icons.GitHub className="mr-2 h-6 w-6" />
                    <span className="text-base font-semibold">
                      {dict.marketing.view_on_github || "View on GitHub"}
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <div className="hidden h-full w-full xl:block">
            <div className="flex flex-col pt-28">
              <Meteorss meteor={meteors_data} />
              <div className="mt-4 flex w-full justify-between">
                {/* <XBlogArticle /> */}
                <div className="ml-4">
                  <FeaturesCard />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="hidden h-[100vh] w-full xl:block">
        <div className="flex h-full w-full justify-between px-[220px]">
          <div className="flex w-[60%] flex-col pr-4 pt-40">
            <WobbleCardShow />
          </div>
          <div className="h-full w-[40%]">
            <div className="flex flex-col pl-[120px]">
              <WordReveal />
            </div>
          </div>
        </div>
      </section> */}

      <section className="hidden w-full xl:block">
        <div className="flex h-full w-full justify-between px-[220px]">
          <div className="flex w-[60%] flex-col pb-40 pr-4">
            <div className="px-[120px]">
              <Questions />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full px-8 xl:hidden">
        <Questions />
      </section>

      <section className="w-full px-8 pt-10 sm:px-0 sm:pt-0 md:px-0 md:pt-0 xl:px-0 xl:pt-0">
        <div className="flex h-full w-full flex-col items-center pb-[100px] pt-10">
          <div>
            <h1 className="mb-6 text-center text-3xl font-bold dark:text-zinc-100 md:text-5xl">
              Revolutionizing Efficiency with Precision and Vision
            </h1>
          </div>
          <div className="mb-6 text-xl dark:text-zinc-100 md:text-xl">
            From large government agencies to private companies.
          </div>

          <div className="w-full overflow-x-hidden">
            <Comments />
          </div>
        </div>
      </section>
    </>
  );
}
