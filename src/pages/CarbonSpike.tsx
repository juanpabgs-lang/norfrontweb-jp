import "../carbon/carbon.scss";
import {
  Theme,
  Header,
  HeaderName,
  HeaderNavigation,
  HeaderMenuItem,
  HeaderGlobalBar,
  Grid,
  Column,
  Button,
  Tag,
  StructuredListWrapper,
  StructuredListHead,
  StructuredListBody,
  StructuredListRow,
  StructuredListCell,
} from "@carbon/react";
import { ArrowRight } from "@carbon/icons-react";

const brands = [
  { name: "Pulsara", vertical: "Customer Operations", status: "Live", type: "blue" as const },
  { name: "Propera", vertical: "Professional Services", status: "Live", type: "blue" as const },
  { name: "Tradara", vertical: "Logistics & Supply Chain", status: "In Development", type: "warm-gray" as const },
  { name: "Audera", vertical: "Finance & Accounting", status: "Designed", type: "gray" as const },
  { name: "Covera", vertical: "Insurance", status: "Designed", type: "gray" as const },
  { name: "Legara", vertical: "Legal", status: "Designed", type: "gray" as const },
  { name: "Onvara", vertical: "HR / People Ops", status: "Designed", type: "gray" as const },
  { name: "Medivex", vertical: "Healthcare", status: "Designed", type: "gray" as const },
  { name: "Leasara", vertical: "Real Estate", status: "Designed", type: "gray" as const },
];

const stats = [
  { value: "94.2%", label: "Classification accuracy — Pulsara × Vision Group, 600+ stores" },
  { value: "€364K", label: "Projected annual labor savings, single deployment" },
  { value: "4 wks", label: "Discovery to production, fixed scope" },
  { value: "9", label: "Vertical brands under one holding company" },
];

const CarbonSpike = () => (
  <Theme theme="g100">
    <div className="norfront-carbon">
      <Header aria-label="Norfront Group" style={{ position: "relative", background: "#000", borderBottom: "1px solid #26262a" }}>
        <HeaderName href="/" prefix="">
          Norfront Group
        </HeaderName>
        <HeaderNavigation aria-label="Norfront Group">
          <HeaderMenuItem href="#">Our Model</HeaderMenuItem>
          <HeaderMenuItem href="#">Case Studies</HeaderMenuItem>
          <HeaderMenuItem href="#">How We Work</HeaderMenuItem>
          <HeaderMenuItem href="#">Portfolio</HeaderMenuItem>
        </HeaderNavigation>
        <HeaderGlobalBar>
          <Button size="sm" renderIcon={ArrowRight} href="#">
            Book a Call
          </Button>
        </HeaderGlobalBar>
      </Header>

      <section className="norfront-hero">
        <Grid>
          <Column lg={12} md={8} sm={4}>
            <p className="norfront-eyebrow">AI Venture Holdings</p>
            <h1 className="norfront-hero-heading">
              We build AI companies that run <em>enterprise operations.</em>
            </h1>
            <p className="norfront-hero-sub">
              A holding company with 9 brands. Each one targets a specific enterprise
              workflow — customer ops, finance, legal, logistics — and deploys a
              production system in 4 weeks.
            </p>
            <div style={{ marginTop: "3rem", display: "flex", gap: "1px" }}>
              <Button renderIcon={ArrowRight}>Talk to Us</Button>
              <Button kind="tertiary">See It In Action</Button>
            </div>
          </Column>
        </Grid>
      </section>

      <section className="norfront-section">
        <Grid>
          <Column lg={16} md={8} sm={4}>
            <p className="norfront-eyebrow">Proven Outcomes</p>
          </Column>
          {stats.map((s) => (
            <Column key={s.label} lg={4} md={4} sm={2}>
              <div className="norfront-stat">
                <div className="norfront-stat-value">{s.value}</div>
                <div className="norfront-stat-label">{s.label}</div>
              </div>
            </Column>
          ))}
        </Grid>
      </section>

      <section className="norfront-section">
        <Grid>
          <Column lg={5} md={8} sm={4}>
            <p className="norfront-eyebrow">Portfolio</p>
            <h2 style={{ fontWeight: 300, fontSize: "2rem", lineHeight: 1.2 }}>
              9 brands.
              <br />9 verticals.
            </h2>
          </Column>
          <Column lg={11} md={8} sm={4}>
            <StructuredListWrapper isCondensed>
              <StructuredListHead>
                <StructuredListRow head>
                  <StructuredListCell head>Brand</StructuredListCell>
                  <StructuredListCell head>Vertical</StructuredListCell>
                  <StructuredListCell head>Status</StructuredListCell>
                </StructuredListRow>
              </StructuredListHead>
              <StructuredListBody>
                {brands.map((b) => (
                  <StructuredListRow key={b.name}>
                    <StructuredListCell style={{ color: "#fff", fontWeight: 500 }}>{b.name}</StructuredListCell>
                    <StructuredListCell>{b.vertical}</StructuredListCell>
                    <StructuredListCell>
                      <Tag type={b.type} size="sm">
                        {b.status}
                      </Tag>
                    </StructuredListCell>
                  </StructuredListRow>
                ))}
              </StructuredListBody>
            </StructuredListWrapper>
          </Column>
        </Grid>
      </section>
    </div>
  </Theme>
);

export default CarbonSpike;
