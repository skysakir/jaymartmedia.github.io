# Software Development

## Running a successful meeting

Note: these points do not apply to some more personal off-topic chat meetings or casual hangouts

### Have a goal for the meeting

Try to stay on topic for the meeting. Going off topic can lead to confusion and wasted time. Try to stick to one topic at a time. Avoid rabbit trails when they are not relevant.

### Have an agenda

Having an agenda helps participants prepare for the meeting, and helps keep the meeting on topic.

### Write down specific action items

During the meeting keep track of action items. At the end of the meeting make sure to briefly mention specific action items and make sure each of them is assigned to a specific person. This avoids the 'bystander effect' where each person assumes that someone else will take ownership of the action item, which can result in NO ONE completing the action item.

Post the action items in chat. This helps refresh everyone's memory as to what needs to be done.

Typical action items:
- Follow up with the security team
- Post a link to the documentation you referenced
- Create a story on the backlog

### Don't over-schedule

When a meeting is scheduled for longer than is required, often it will go off topic and take up the entire scheduled time anyway ([Parkinson's Law](https://en.wikipedia.org/wiki/Parkinson%27s_law)). Making the meeting as short as possible can have the opposite effect. If the meeting is short people are forced to stay on topic. If they stray off-topic, guide them back to the topic and remind of time constraints. This loses some effectiveness if meetings are regularly allowed to go overtime.

### End the meeting when it is over

End the meeting when time is up, or when the topic is discussed to completion and any action items have been assigned. If meetings are regularly allowed to go overtime, people will tend to start going off-topic since they are not constrained by time. 

If meetings always extend to the end of the scheduled time, often the last portion (after the issue is resolved) is just wasted time as everyone is afraid to end the meeting. This is a waste of everyone's time.

## Managing deployments

Note: Some of this likely only applies if doing manual production deploys rather than a true CI/CD pipeline.

It is helpful to have a deployment release plan before doing a production deployment. This is helpful for visibility to higher-ups, and shows that you are doing your due diligence before a deployment. Having a deployment plan that is shared with your team allows other team members to catch issues before the deployment. Perhaps there is a database change you forgot about, or validation data that needs to be setup. It also gives QA a chance to prepare for the deployment, it may be helpful to have them write down an overview of any validation steps that they will perform. This allows dev team to point out any other areas that may need extra testing. The deployment plan can be sent to teams working on other applications that interact with the app that you are deploying, this gives them a change to identify issues before the deployment.

Sections that may be helpful to include:
- Who will be participating in the deployment - can help ensure that someone is responsible for the deployment and avoids the bystander effect
- List of application(s) that will be deployed including:
  - Currently deployed production version - helpful for rollback
  - Version that will be deployed to production
  - List of newly added features/bug fixes that will be deployed - helpful for QA to determine what should be validated
  - Any other dependencies that will be needed for the deployment - database changes required by the new code, data in order for QA to validate, user online to test, etc.
  - Rollback plan - for simple code changes this can be as simple as deploying the previously released version (you recorded that, right?), for more complex changes this could also involve database rollback
- Step-by-step walk-through
  - First we will notify the database team that they can deploy our change
  - Check that the new column is in the database
  - Deploy the updated API
    - Perform any API validation
  - Deploy the updated UI
    - Perform UI validation
