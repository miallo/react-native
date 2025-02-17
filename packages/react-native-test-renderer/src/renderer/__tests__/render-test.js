/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 * @flow
 */

'use strict';

import * as ReactNativeTestRenderer from '../index';
import * as React from 'react';
import {Text, View} from 'react-native';
import 'react-native/Libraries/Components/View/ViewNativeComponent';

function TestComponent() {
  return (
    <View>
      <Text>Hello</Text>
      <View />
    </View>
  );
}

describe('render', () => {
  describe('toJSON', () => {
    it('returns expected JSON output based on renderer component', () => {
      const result = ReactNativeTestRenderer.render(<TestComponent />);
      expect(result.toJSON()).toMatchSnapshot();
    });
  });
});
