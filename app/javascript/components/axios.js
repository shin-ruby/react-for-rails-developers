// AXIOS GLOBALS
axios.defaults.headers.common['X-Auth-Token'] = 'Shin-token';


// GET REQUEST
function getTodos() {
  // axios({
  //   method: 'GET',
  //   url: ''
  //   params: {
  //     _limit: 5
  //   }
  // }).then(res => console.log(res.data))
  //   .catch(err => console.error(err));

  axios.get('url/todos?_limit=5').then(res => console.log(res))
  .catch(err => console.error(err));

}

// POST REQUEST
function addTodo() {
  axios.post('url', {
    title: 'New Todo',
    completed: false
  }).then(res => console.log(res))
    .catch(err => console.error(err));
}


// PUT/PATCH REQUEST
function updateTodo() {
  axios.patch('url/id', {
    title: 'Update Todo',
    completed: false
  }).then(res => console.log(res))
    .catch(err => console.error(err));
}

// DELETE REQUEST
function removeTodo() {
  axios.delete('url/id').then(res => console.log(res))
    .catch(err => console.error(err));
}

// SIMULTANEOUS DATA
function getData() {
  axios
    .all([
      axios.get('url-1'),
      axios.get('url-2'),
    ]).then(res => {
        console.log(res[1]);
        console.log(res[2]);
    }).catch(err => console.error(err));
}

// INTERCEPTING REQUESTS & RESPONSES
axios.interceptors.request.use(
  config => {
    console.log(
      `${config.method.toUpperCase()} request sent to ${
        config.url
      } at ${new Date().getTime()}`
    );
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// CUSTOM HEADRES
function customHeaders() {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'some-token' //权限控制上传
    }
  };

  axios.post('url', {
    title: 'New Todo',
    completed: false
  }).then(res => console.log(res))
    .catch(err => console.error(err));
}

// TRANSFORMING REQUESTS & RESPONSES
function transformResponse() {
  const options = {
    method: 'post',
    url: 'url'
    data: {
      title: 'Hello World'
    },
    transformResponse: axios.defaults.transformResponse.concat(data => {
      data.title = data.title.toUpperCase();
      return data;
    })
  };
  axios(options).then(res => console.log(res));
}

// ERROR HANDLING
function errorHandling() {
  axios.get('url错').then(res => console.log(res))
  .catch(err => {
    if (err.response) {
      // Aerver responded with a status other than 200 range
      console.log(err.response.data);
      console.log(err.response.status);
      console.log(err.response.headers);
    } else if (err.request) {
      // Request was made but no response
      console.error(err.request);
    } else {
      console.error(err.message);
    }
  });
}

// CANCLE TOKEN
function cancelToken() {
  const source = axios.cancelToken.source();

  axios.get('url', {
    cancelToken: source.token
  })
  .then(res => console.log(res))
  .catch(thrown => {
    if (axios.isCancel(thrown)) {
      console.log('Request canceled', thrown.message);
    }
  });

  if (true) {
    source.cancel('Request canceled');
  }
}

// AXIOS INSTANCE
const axiosInstance = axios.create({
  baseURL: 'https://wefocustin.com'
});

axiosInstance.get('/comments').then(res => console.log(res))
