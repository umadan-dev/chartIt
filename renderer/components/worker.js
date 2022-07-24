self.onmessage = ({ data }) => {
    for (let i = 0; i < data.length - 1; i++) {
      for (let j = 0; j < data.length - 2; j++) {
        postMessage({
          status: data[i][j],
          key: j,
          time: data[i][8],
        });
      }
    }
  };
  