import FormBody from "@/content/form";
import FormScripts from "@/components/FormScripts";
import { siteMetadata } from "@/lib/site-metadata";

export const metadata = siteMetadata("Отдых в центре Мещеры - мы готовы исполнить вашу мечту!");

export default function FormPage() {
  return (
    <>
      <FormBody />
      <FormScripts />
    </>
  );
}
