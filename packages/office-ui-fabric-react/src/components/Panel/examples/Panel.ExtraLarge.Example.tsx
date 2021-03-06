import * as React from 'react';
import { autobind } from 'office-ui-fabric-react/lib/Utilities';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
import { Panel, PanelType } from 'office-ui-fabric-react/lib/Panel';

export class PanelExtraLargeExample extends React.Component<{}, {
  showPanel: boolean;
}> {

  constructor(props: {}) {
    super(props);
    this.state = { showPanel: false };
  }

  public render() {
    return (
      <div>
        <DefaultButton
          description='Opens the Sample Panel'
          // tslint:disable-next-line:jsx-no-lambda
          onClick={ () => this.setState({ showPanel: true }) }
          text='Open Panel'
        />
        <Panel
          isOpen={ this.state.showPanel }
          // tslint:disable-next-line:jsx-no-lambda
          onDismiss={ () => this.setState({ showPanel: false }) }
          type={ PanelType.extraLarge }
          headerText='Extra Large Panel'
          closeButtonAriaLabel='Close'
        >
          <span>Content goes here.</span>
        </Panel>
      </div>
    );
  }
}
