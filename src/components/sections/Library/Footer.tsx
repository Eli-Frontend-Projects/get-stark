import React from 'react';
import FooterTile from './FooterTile';
import './FooterTile.scss';
import './Footer.scss';

const UseCasesValues = {
  title: "USE CASES",
  links: [
    "For Designers",
    "For Developers",
    "For Product Managers",
    "For Compliance Managers"
  ]
};

const ResourcesValues = {
  title: "RESOURCES",
  links: [
    "Blog",
    "Library",
    "Release Notes",
    "Slack Community",
    "WCAG Compliance",
    "Section 508 Compliance",
    "European Accessibility Act (EAA) Compliance"
  ]
};

const HelpValues = {
  title: "HELP",
  links: [
    "My Account",
    "Support Docs",
    "Contact Us",
    "Feature Requests"
  ]
};

const CompanyValues = {
  title: "COMPANY",
  links: [
    "Stark Framework",
    "Privacy Policy",
    "Terms of Service",
    "Code of Conduct"
  ]
};

const SecurityValues = {
  title: "SECURITY",
  links: [
    "Security Overview",
    "Cookie Policy",
    "GDPR",
    "Status"
  ]
};

const DesignIntegrationsValues = {
  title: "DESIGN INTEGRATIONS",
  links: [
    "Stark for Figma",
    "Stark for FigJam",
    "Stark for Sketch",
    "Stark for Adobe XD"
  ]
};

const DeveloperIntegrationsValues = {
  title: "DEVELOPER INTEGRATIONS",
  links: [
    "Stark for Chrome",
    "Stark for Firefox",
    "Stark for Edge",
    "Stark for Safari",
    "Stark for Arc",
    "Stark for Brave"
  ]
};

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__grid">
        <FooterTile {...UseCasesValues} />
        <FooterTile {...ResourcesValues} />
        <FooterTile {...HelpValues} />
        <FooterTile {...CompanyValues} />
        <FooterTile {...SecurityValues} />
        <FooterTile {...DesignIntegrationsValues} />
        <FooterTile {...DeveloperIntegrationsValues} />
      </div>
    </footer>
  );
};

export default Footer;