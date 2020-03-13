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

import React, { useState, useEffect } from 'react';
import { LinearProgress } from '@material-ui/core';

const Progress = childProps => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handle = setTimeout(() => setIsVisible(true), 250);
    return () => clearTimeout(handle);
  }, []);

  return isVisible ? (
    <LinearProgress {...childProps} data-testid="progress" />
  ) : (
    <div style={{ display: 'none' }} data-testid="progress" />
  );
};

export default Progress;