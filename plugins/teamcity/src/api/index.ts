/*
 * Copyright 2020 Spotify AB
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { createApiRef } from '@backstage/core';
import { off } from 'process';

export class BuildSummary {
  outcome?: string;
  status?: string;
  build_num?: number;
  vcs_revision?: string;
  pushed_at?: string;
  is_workflow_job?: boolean;
  added_at?: string;
  build_name?: string;
}

export type BuildSummaryResponse = BuildSummary[];

export interface RequestOptions {
  readonly limit?: number;
  readonly offset?: number;
}

export interface ArtifactsRequestOptions {
}

export interface FilterRequestOptions extends RequestOptions {
}

/**
 * @description Basic information required for a standard CircleCI request
 * @property {string} [token] - CircleCI API key
 * @property {GitInfo} [vcs] - Git information required for project related endpoints
 * @property {Options} [options] - Extra query parameters for build endpoints
 * @property {string} circleHost - Override the default host for CircleCI [API_BASE]
 */
export interface TeamCityRequest {
  token?: string;
  //vcs?: GitInfo;
  //options?: Options;
  circleHost?: string;
}

/**
 * @description Required options for the CircleCI factory
 * @property {string} token - CircleCI API key
 */
export interface TeamCityOptions extends TeamCityRequest {
  token: string;
}

export const teamCityApiRef = createApiRef<TeamCityApi>({
  id: 'plugin.teamcity.service',
  description: 'Used by the TeamCity plugin to make requests',
});

export class TeamCityApi {
  apiUrl: string;
  constructor(apiUrl: string = '/app/rest') {
    this.apiUrl = apiUrl;
  }

  async retry(buildNumber: number, options: TeamCityOptions) {

  }

  async getBuilds(
    { limit = 10, offset = 0 }: { limit: number; offset: number },
    options: TeamCityOptions,
  ) {
    limit = 11;
    offset = 0;
    var test:TeamCityOptions = options;
    return this.getBuildSummaries(options.token,
      this.apiUrl
    );
  }

  async getUser(options: TeamCityOptions) {
  }

  async getBuild(buildNumber: number, options: TeamCityOptions) {
  }

  async getBuildSummaries(
    token: string,
    teamCityHost : string
  ): Promise<BuildSummaryResponse> {
    var buildSummary1 = new BuildSummary();
    buildSummary1.build_num = 1;
    buildSummary1.status="running";
    buildSummary1.outcome="success";
    buildSummary1.build_name="My BuildConfig1";

    var buildSummary2 = new BuildSummary();
    buildSummary2.build_num = 2;
    buildSummary2.status="queued";
    buildSummary2.outcome="success";
    buildSummary1.build_name="My BuildConfig2";

    var buildSummary3 = new BuildSummary();
    buildSummary3.build_num = 3;
    buildSummary3.status="success";
    buildSummary3.outcome="success";
    buildSummary1.build_name="My BuildConfig3";

    var buildSummaryResponse: BuildSummaryResponse = [
      buildSummary1,
      buildSummary2,
      buildSummary3
  ]
    return Promise.resolve(buildSummaryResponse);
  }

  

}

