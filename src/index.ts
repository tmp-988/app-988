import { Application } from 'probot' // eslint-disable-line no-unused-vars

export = (app: Application) => {
  app.on('issues.opened', async (context) => {
    const issueComment = context.issue<{
      body: string
      issue_number: number | null
    }>({ body: 'Thanks for opening this issue!', issue_number: null })
    // Use `issue_number` in place of `number` (https://github.com/probot/probot/pull/926)
    issueComment.issue_number = issueComment.number
    delete issueComment['number']
    await context.github.issues.createComment(issueComment)


    const mentionComment = context.issue<{
      body: string
      issue_number: number | null
    }>({ body: 'Pinging @tmp-988/notifications-max', issue_number: null })
    // Use `issue_number` in place of `number` (https://github.com/probot/probot/pull/926)
    mentionComment.issue_number = mentionComment.number
    delete mentionComment['number']
    await context.github.issues.createComment(mentionComment)

  })
  // For more information on building apps:
  // https://probot.github.io/docs/

  // To get your app running against GitHub, see:
  // https://probot.github.io/docs/development/
}
