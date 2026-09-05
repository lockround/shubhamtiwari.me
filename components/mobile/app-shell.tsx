"use client";

import { useCallback, useEffect, useState } from "react";
import { AppHeader } from "@/components/mobile/app-header";
import { Screen } from "@/components/mobile/shared/screen";
import { ServiceWorkerRegister } from "@/components/mobile/sw-register";
import { TabBar, type TabId } from "@/components/mobile/tab-bar";
import { HomeScreen } from "@/components/mobile/screens/home-screen";
import { ExpertiseScreen } from "@/components/mobile/screens/expertise-screen";
import { ExperienceScreen } from "@/components/mobile/screens/experience-screen";
import { WorkScreen } from "@/components/mobile/screens/work-screen";
import { ConnectScreen } from "@/components/mobile/screens/connect-screen";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

const standalone =
  typeof window !== "undefined" &&
  window.matchMedia("(display-mode: standalone)").matches;

export function AppShell() {
  const [tab, setTab] = useState<TabId>("home");
  const [installPrompt, setInstallPrompt] =
    useState<BeforeInstallPromptEvent | null>(null);

  const go = useCallback((id: TabId) => setTab(id), []);

  useEffect(() => {
    const onPrompt = (e: Event) => {
      e.preventDefault();
      setInstallPrompt(e as BeforeInstallPromptEvent);
    };
    const onInstalled = () => setInstallPrompt(null);

    window.addEventListener("beforeinstallprompt", onPrompt);
    window.addEventListener("appinstalled", onInstalled);
    return () => {
      window.removeEventListener("beforeinstallprompt", onPrompt);
      window.removeEventListener("appinstalled", onInstalled);
    };
  }, []);

  const handleInstall = useCallback(() => {
    if (!installPrompt) return;
    installPrompt.prompt();
    installPrompt.userChoice.then(() => setInstallPrompt(null));
  }, [installPrompt]);

  return (
    <>
      <ServiceWorkerRegister />
      <div className="relative mx-auto flex h-[100dvh] max-w-[480px] flex-col overflow-hidden bg-background lg:border-x lg:border-border/60">
        <AppHeader
          canInstall={!standalone && installPrompt !== null}
          onInstall={handleInstall}
        />

        <div className="flex-1 overflow-y-auto overscroll-none">
          <Screen tabId={tab}>
            {tab === "home" && <HomeScreen onNavigate={go} />}
            {tab === "expertise" && <ExpertiseScreen />}
            {tab === "experience" && <ExperienceScreen />}
            {tab === "work" && <WorkScreen />}
            {tab === "connect" && <ConnectScreen />}
          </Screen>
        </div>

        <TabBar active={tab} onSelect={go} />
      </div>
    </>
  );
}