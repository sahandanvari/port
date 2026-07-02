import { aurora } from "./aurora";
import { auroraReferenceWebsite } from "./aurora-reference-website";
import { componentRegistry } from "./component-registry";
import { dataview } from "./dataview";
import { luminis } from "./luminis";
import { mcp } from "./mcp";
import { tokenPipeline } from "./token-pipeline";
import { interactionTokens } from "./interaction-tokens";
import { multibrand } from "./multibrand";
import { adoption } from "./adoption";
import { audit } from "./audit";
import { assetGallery } from "./asset-gallery";
import { propper } from "./propper";
import type { CaseStudy } from "./types";

/** Home / nav order: flagships first, then secondary */
export const caseStudies: CaseStudy[] = [
  luminis,
  dataview,
  mcp,
  aurora,
  tokenPipeline,
  multibrand,
  interactionTokens,
  auroraReferenceWebsite,
  componentRegistry,
  adoption,
  audit,
  assetGallery,
  propper,
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}

export type { CaseStudy, CaseStudySection, Metric } from "./types";
