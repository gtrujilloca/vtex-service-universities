export async function getUniversities(ctx: Context, next: () => Promise<any>) {
  const {
    vtex: {
      route: { params }
    },
    clients: { universities: universityClient }
  } = ctx;

  console.info('Received code:', params.country)


  const appId = process.env.VTEX_APP_ID ?? '';
  const {
    universities: universitiesSchema,
    country: countrySchema
  } = await ctx.clients.apps.getAppSettings(appId);

  const response = await universityClient.getUniversityByCountry(params.country as string)
  console.log(universitiesSchema, countrySchema);

  if (response.status === 200) {
    ctx.status = 200
    ctx.body = response.data
  } else {
    ctx.body = 'Error: ' + response.status
  }
  // ctx.set('Cache-Control')

  await next()
}
