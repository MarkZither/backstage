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

import React, { FC } from 'react';
import { createRouteRef } from '@backstage/core';
import { SvgIcon, SvgIconProps } from '@material-ui/core';

export const TeamCityIcon: FC<SvgIconProps> = props => (
  <SvgIcon
    {...props}
    enableBackground="new 0 0 108.6 108.5"
    viewBox="0 0 108.6 108.5"
  >
	<rect x="0" y="3.7" fill="#000000;" width="85" height="85"/>
	<polygon fill="#FFFFFF" points="14.4,18.6 7.9,18.6 7.9,14.3 25.5,14.3 25.5,18.6 19,18.6 19,35.5 14.4,35.5 		"/>
	<path fill="#FFFFFF" d="M25.8,25L25.8,25c0-6.1,4.6-11.1,11.1-11.1c4,0,6.4,1.3,8.4,3.3l-3,3.4c-1.6-1.5-3.3-2.4-5.4-2.4
		c-3.6,0-6.2,3-6.2,6.6v0.1c0,3.6,2.5,6.7,6.2,6.7c2.4,0,3.9-1,5.6-2.5l3,3c-2.2,2.3-4.6,3.8-8.7,3.8C30.4,35.9,25.8,31.1,25.8,25"
		/>
	<rect x="7.9" y="72.8" fill="#FFFFFF" width="31.9" height="5.3"/>
  </SvgIcon>
);

export const teamCityRouteRef = createRouteRef({
  icon: TeamCityIcon,
  path: '/teamcity',
  title: 'TeamCity',
});