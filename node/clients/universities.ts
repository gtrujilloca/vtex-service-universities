import type { InstanceOptions, IOContext, IOResponse } from '@vtex/api'
import { ExternalClient } from '@vtex/api'

export default class UniversityClient extends  ExternalClient {
  constructor(context: IOContext, options?: InstanceOptions) {
    super('http://universities.hipolabs.com', context, options)
  }

  public async getUniversityByCountry(country: string) {
    return this.http.getRaw(`search?country=${country}`)
  }

  public async getStatusWithHeaders(
    status: number
  ): Promise<IOResponse<string>> {
    return this.http.getRaw(status.toString(), {
      metric: 'status-get-raw',
    })
  }
}
