import FormScripts from "@/components/FormScripts";
import FormContent from "@/components/sections/form/FormContent";
import { siteMetadata } from "@/lib/site-metadata";

export const metadata = siteMetadata("Отдых в центре Мещеры - мы готовы исполнить вашу мечту!");

export default function FormPage() {
  return (
    <>
      <FormContent />
      <FormScripts />
    </>
  );
}
