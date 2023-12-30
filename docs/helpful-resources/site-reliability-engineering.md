# SRE

## Overview

This file contains my thoughts on Site Reliability Engineering (SRE). Disclaimer that I am a software engineer, I am not necessarily a site reliability engineer. But I think there is enough overlap in some responsibilities that my thoughts and experience may be helpful to others.

## What is SRE?

Site reliability engineering roles, responsibilities and practices will vary from company to company. But the general purpose remains the same:

- Ensure that software services are stable.
- Ensure that monitoring is in place to detect issues as early as possible.
- Ensure that there is a process to follow in case issues arise.

These responsibilities may belong to a specific role, or be shared between multiple roles.

## SRE in my experience

This section details my specific experience regrading SRE at different companies.

### Fortune 50 Home Improvement Retail

I worked at a Fortune 50 company that had a dedicated SRE role. I did not interact with people in this role often, but there were a few instances where there was an issue with the app that my team owned, and they would reach out to me as a developer for support.

My perception of the SRE role at this company was that they were responsible for running the logging platform, and having automated checks in place to detect issues. If there were any issues, SRE would investigate to determine if it was a networking/infrastructure issue in which case they may be able to take action or escalate to another team, or an application issue in which case they may need to escalate to the development team. I am not sure whether the development team or SRE team managed the cloud resources at this company. 

Tech:
- Deployment stack
    - CI/CD - [Jenkins](https://www.jenkins.io/)
    - Containerization - [Docker](https://www.docker.com/) and [Podman](https://podman.io/)
    - Container Orchestration - [Spinnaker](https://spinnaker.io/)
    - Compute - [Google Cloud Run](https://cloud.google.com/run) (Maybe Cloud Run, definitely GCP)
- Logging stack - [Elasticsearch, Kibana](https://www.elastic.co/elastic-stack)
- Monitoring stack - Unsure, possibly some alerting tools in Kibana?

### Multi-Billion-Dollar Logistics Brokerage

I worked at a logistics brokerage company that did not have an SRE title, but the SRE responsibilities were split between different roles. The two roles that took most of the SRE responsibility were the Platform Engineering (PE) and Network Operations Center (NOC).

The PE team was responsible for maintaining the Windows VMs that legacy applications were deployed to. They also maintained the on-prem Kubernetes (K8s) clusters that newly built apps run on. They were also responsible for maintaining the legacy logging platform, SEQ, as well as the new logging platform, Elasticsearch. 

The NOC was responsible for maintaining the monitoring tools that would detect outages. When an issue was detected by automated checks, the NOC would follow run books and escalate to the on-call person for the appropriate team. The NOC was also responsible for change management.

The Cloud team was responsible for overseeing cloud resource creation and management, however development teams had control over specific cloud resources.

The development team was responsible for creating and maintaining their build and deployment pipelines. The development team could consult with PE if needed for pipeline management. The development team would request Resource Group creation from the Cloud team (Azure's logical grouping of cloud resources). Then the development team could create their own resources as needed inside that resource group.

Tech:
- Deployment stack
    - CI/CD - [Azure Pipelines](https://azure.microsoft.com/en-us/products/devops/pipelines)
    - Monitoring - [Datadog](https://www.datadoghq.com/)
    - Cloud - [Azure](https://azure.microsoft.com/)
    - Legacy
        - Compute - On-prem Windows VMs running [IIS](https://www.iis.net/)
        - Logging - [SEQ](https://datalust.co/seq)
    - New/Green-field
        - Containerization - [Docker](https://www.docker.com/)
        - Container Orchestration - [Kubernetes](https://kubernetes.io/)
        - Logging - [Elasticsearch](https://www.elastic.co/elasticsearch)

## Is SRE for you?

If you are interested in the operations aspect of software (deploying/monitoring/maintaining), then SRE may be for you. SRE may be less programming heavy than development, which may be a good fit for people interested in software, but not necessarily programming. Note that it is likely that some programming knowledge would be required, or at the very least helpful, for many SRE roles.

At this point, I don't think SRE is the role for me. Mostly because I enjoy the programming/development aspect of software. That said, I am very interested in SRE in terms of being able to run/deploy and support my own applications, and I just enjoy learning stuff in general.

### Salary

As with all potential careers, salary is relevant. Here are a few links to various salary sites:
- glassdoor - https://www.glassdoor.com/Salaries/site-reliability-engineer-salary-SRCH_KO0,25.htm
- hired.com - https://hired.com/salaries/site-reliability-engineer-sre
- levels.fyi - https://www.levels.fyi/t/software-engineer/focus/site-reliability-sre
- payscale.com - https://www.payscale.com/research/US/Job=Site_Reliability_Engineer_(SRE)/Salary

### Remote Work

SRE roles, like other software roles, are often remote. Although in-person/hybrid jobs can also be found if that is something you prefer.

## SRE Concepts/Tools/Skills

Here are some general concepts, tools, and skills that may be helpful for someone in an SRE position. Note that all of the items listed below are not necessarily hard requirements. Full proficiency is not necessarily required for each of the listed items, working knowledge will be enough in a lot of cases.

- Logging/Monitoring
    - How to proactively detect issues with an application/network/etc.
    - i.e. Datadog, ELK stack, etc.
- Networking
    - How do DNS/Firewall/etc. work
- Deployment
    - Docker/Kubernetes for containerized app management
    - Terraform for managing cloud infrastructure
    - Build/Deploy pipelines such as GitHub Actions/Jenkins/Azure Pipelines/etc.
- Programming
    - Bash/Linux CLI
    - Python


## Resources

Information about SRE from some large companies

- AWS - https://aws.amazon.com/what-is/sre/
- Google - https://sre.google/
- Redhat - https://www.redhat.com/en/topics/devops/what-is-sre
- Wikipedia - https://en.wikipedia.org/wiki/Site_reliability_engineering
