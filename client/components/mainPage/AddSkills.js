import React, { Component } from 'react';

export class AddSkills extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // updateJavascript(value) {
  //   this.setState({ ...this.state, javascript: value });
  // }
  // updateSQL(value) {
  //   this.setState({ ...this.state, SQL: value });
  // }
  // updateReact(value) {
  //   this.setState({ ...this.state, React: value });
  // }
  // updateNode(value) {
  //   this.setState({ ...this.state, Nodejs: value });
  // }
  // updateHTML(value) {
  //   this.setState({ ...this.state, HTML: value });
  // }
  // updateCSS(value) {
  //   this.setState({ ...this.state, CSS: value });
  // }
  // updateRedux(value) {
  //   this.setState({ ...this.state, Redux: value });
  // }
  // eventHandler() {
  //   const javascript = this.state.javascript;
  //   const SQL = this.state.SQL;
  //   const React = this.state.React;
  //   const Node = this.state.Node;
  //   const HTML = this.state.HTML;
  //   const CSS = this.state.CSS;
  //   const Redux = this.state.Redux;
  //   this.setState({
  //     javascript: '',
  //     SQL: '',
  //     React: '',
  //     Nodejs: '',
  //     HTML: '',
  //     CSS: '',
  //     Redux: '',
  //   });
  // const body = { javascript, lastName, email, userName, passWord };
  // const body = { javascript, SQL, React, Nodejs, HTML, CSS, Redux };

  //   fetch('/createSkills', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'Application/JSON',
  //     },
  //     body: JSON.stringify(body),
  //   })
  //     .then((resp) => resp.json())
  //     .then((data) => {
  //       console.log(data);
  //       // props.history.push('/');
  //     })
  //     .catch((err) =>
  //       console.log('Register User fetch /api/create: ERROR: ', err)
  //     );
  // }

  updateSkills(e) {
    const skill = e.target.value;
    const newState = Object.assign({}, this.state);
    if (newState[skill]) {
      delete newState[skill];
    } else {
      newState[skill] = true;
    }
    this.setState(newState);
  }

  submitSkills() {
    fetch('/createSkills', {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/JSON',
      },
      body: JSON.stringify(Object.keys(this.state)),
    }).then();
  }
  componentDidUpdate() {
    console.log('THIS.STATE******', this.state);
  }

  render() {
    return (
      <div>
        <h2>Register New Skill in Your Profile</h2>
        <input
          type="checkbox"
          id="1"
          name="javascript"
          value="JavaScript"
          onChange={this.updateSkills}
        ></input>
        <label for="1">JavaScript</label>
        <br />
        <input
          type="checkbox"
          id="2"
          name="SQL"
          value="SQL"
          onChange={this.updateSkills}
        ></input>
        <label for="2">SQL</label>
        <br />
        <input
          type="checkbox"
          id="3"
          name="React"
          value="React"
          onChange={this.updateSkills}
        ></input>
        <label for="3">React</label>
        <br />
        <input
          type="checkbox"
          id="4"
          name="Nodejs"
          value="Nodejs"
          onChange={this.updateSkills}
        ></input>
        <label for="4">Node Express</label>
        <br />
        <input
          type="checkbox"
          id="5"
          name="HTML"
          value="HTML"
          onChange={this.updateSkills}
        ></input>
        <label for="5">HTML</label>
        <br />
        <input
          type="checkbox"
          id="6"
          name="CSS"
          value="CSS"
          onChange={this.updateSkills}
        ></input>
        <label for="6">CSS</label>
        <br />
        <input
          type="checkbox"
          id="7"
          name="Redux"
          value="Redux"
          onChange={this.updateSkills}
        ></input>
        <label for="7">Redux</label>
        <br />
        <button onClick={this.submitSkills}>submit</button>
      </div>
    );
  }
}
export default AddSkills;
