# Serverless Any Cloud
Demo application using Serverless framework for automated deployment of micro services to any cloud provider with minimal configuration differences.

## TODO Back-end:
- [x] Create simple function transforming geographic coordinates in variable size chunks using proj4, WGS84 to SWEREF99 TM
- [ ] Create serverless.yml template with all but provider specific elements
- [ ] Create provider specifc config files
- [ ] Create gulp scripts, building one final serverless.yml for each provider, then deploying to each provider

## TODO Front-end:
- [ ] Create simple web client in Codepen
- [ ] OpenLayers full page in SWEREF99 TM
- [ ] Path input data (free paint or gps recording of ånnaboda/kilsbergen)
- [ ] parameters (chunk size, what else?) overlay
- [ ] Resulting transformed path from AWS and Azure drawn in map
- [ ] Numeric results from AWS and Azure for comparison (response time, what else?)
