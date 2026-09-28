# Data Sources and Provenance

Retrieval/build date: **2026-09-28**.

The application intentionally separates bundled reference content from live official services. A link marked live can change after this build. The source registry is also machine-readable at `data/source-registry.json`.

## Core Texas sources

| Domain | Publisher | Resource | Use |
|---|---|---|---|
| Medicaid transportation | Texas HHS | https://www.hhs.texas.gov/services/health/medicaid-chip/programs/medical-transportation-program | NEMT eligibility/process education and transport planning |
| Workforce shortage | Texas DSHS / TPCO | https://www.dshs.texas.gov/center-health-statistics/texas-primary-care-office-tpco/shortage-area-designations/health-professional-shortage-area-designations | HPSA/MUA-P workforce planning |
| School health | Texas DSHS | https://www.dshs.texas.gov/immunizations/school | Current school/childcare immunization materials |
| Maternal health | Texas DSHS | https://www.dshs.texas.gov/maternal-child-health/healthy-texas-mothers-babies/maternal-health-texas | Maternal-health initiatives and resource navigation |
| Air quality | TCEQ | https://www.tceq.texas.gov/airquality | Environmental-health context |
| Drinking water | TCEQ | https://www.tceq.texas.gov/drinkingwater | Public drinking-water context |
| Rural/accessibility mobility | TxDOT | https://www.txdot.gov/projects/planning/utp/multimodal-programs.html | Rural transit and mobility-program context |
| Community resource referral | 2-1-1 Texas | https://www.211texas.org/ | Local social/health resource discovery |

## Federal sources

- HRSA Find a Health Center — https://findahealthcenter.hrsa.gov/
- CMS Hospital Price Transparency — https://www.cms.gov/priorities/key-initiatives/hospital-price-transparency
- Medicare Savings Programs — https://www.medicare.gov/basics/costs/help/medicare-savings-programs
- HealthCare.gov — https://www.healthcare.gov/
- CDC Heat & Health — https://www.cdc.gov/heat-health/about/index.html
- USPSTF recommendations — https://www.uspreventiveservicestaskforce.org/uspstf/recommendation-topics
- FindTreatment.gov — https://findtreatment.gov/
- 988 Lifeline — https://988lifeline.org/

## Source rules

1. Do not treat a cached/bundled description as proof of current eligibility, availability, hours, funding or clinical appropriateness.
2. When a user enters county/local statistics, store the source URL and date alongside the value.
3. Do not invent missing county statistics.
4. Do not convert environmental measurements or access metrics into an individual diagnosis.
5. Record modeled scenario outputs as Evidence E, not official Texas statistics.
6. Live integrations should expose retrieval time, geography, failure state and data publisher.
