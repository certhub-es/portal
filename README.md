# CertHub - Main Portal & Certification Roadmaps

<p align="center">
  <img src="https://raw.githubusercontent.com/certhub-es/portal/master/imgs/logo.svg" alt="CertHub Logo" width="160"/>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/CertHub-Certification_Portal-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white" alt="CertHub"/>
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React 19"/>
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite"/>
  <img src="https://img.shields.io/badge/AWS_Cloudscape-Design_System-FF9900?style=for-the-badge&logo=amazon-aws&logoColor=white" alt="Cloudscape"/>
</p>

<p align="center">
  <a href="https://buymeacoffee.com/dibanezb">
    <img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" height="42" width="150" />
  </a>
</p>

Main portal and official interactive roadmap catalog for **CertHub** ([certhub.es](https://certhub.es)), serving as the centralized gateway to cloud certification campuses (AWS, Cloud AI, Security, DevOps).

---

## ⚡ Highlights

- 🧭 **Certification Roadmaps:** Structured career pathways from Foundational to Specialty level.
- 🎯 **Campus Hub Gateway:** Direct navigation and single-sign-on entry to individual exam study campuses.
- 🎨 **Enterprise UI:** Designed with AWS Cloudscape components for clean layout, responsive grids, and instant search filtering.
- 🚀 **Edge CDN Delivery:** Optimized static delivery via Amazon CloudFront and S3.

---

## 🏛️ Platform Architecture

`mermaid
flowchart TD
    User["🌐 Visitor / Engineer"] --> CloudFront["🚀 Amazon CloudFront (certhub.es)"]
    CloudFront --> S3["☁️ Amazon S3 (Portal Static Build)"]
    S3 --> Portal["⚡ CertHub Main Portal"]
    Portal --> Campus1["📚 /aws/ai-practitioner (AIF-C01 Campus)"]
    Portal --> Campus2["📚 /aws/solutions-architect (SAA-C03 Campus)"]
    Portal --> Campus3["📚 /aws/cloud-practitioner (CLF-C02 Campus)"]
`

---

## 🚀 Development & Build

`ash
# Install dependencies
npm install

# Start local dev server
npm run dev

# Build for production
npm run build
`

---

## ☕ Support & Organization

- **Organization:** [CertHub (certhub-es)](https://github.com/certhub-es)
- **Lead Developer:** Daniel Ibáñez - [@danielibabet](https://github.com/danielibabet)
- Support CertHub: [![Buy Me A Coffee](https://img.shields.io/badge/Buy%20Me%20A%20Coffee-Donate-yellow.svg?style=flat&logo=buy-me-a-coffee)](https://buymeacoffee.com/dibanezb)