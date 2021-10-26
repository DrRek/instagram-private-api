import { IgResponseError } from './ig-response.error';
import { CheckpointResponse } from '../responses';

export class IgCheckpointError extends IgResponseError<CheckpointResponse> {
  get url() {
    return this.response.body.challenge.url;
  }

  get apiUrl() {
    return 'https://127.0.0.1:8082/api/v1' + this.response.body.challenge.api_path; //Edit 2 - i.instagram.com
  }
}
