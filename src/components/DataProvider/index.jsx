import { Component } from 'react';

class DataProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isFetching: false,
      error: null,
    };
  }
  componentDidMount() {
    this.load();
  }

  load = () => {
    this.setState({ isFetching: true });
    fetch(this.props.url)
      .then((res) => res.json())
      .then((data) => this.setState({ data, isFetching: false }))
      .catch((e) => this.setState({ error: e, isFetching: false }));
  };

  render() {
    const { children } = this.props;
    return children(this.state.data);
  }
}

export default DataProvider;
