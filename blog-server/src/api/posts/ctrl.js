let postId = 1; //id의 초깃값

//posts 배열 초기 데이터
const posts = [
  {
    id: 1,
    title: 'title',
    body: 'body',
  },
];

/* 
    포스트 작성
    POST /api/posts
    {title, body}
*/
export const write = (ctx) => {
  //REST API의 Request Body는 ctx.request.body에서 조회 가능
  const { title, body } = ctx.request.body;
  postId += 1;
  const post = { id: postId, title, body };
  posts.push(post);
  ctx.body = post;
};

/*
    포스트 목록 조회
    GET /api/posts
*/
export const list = (ctx) => {
  ctx.body = posts;
};

/*
    특정 포스트 조회
    GET /api/posts/:id
*/
export const read = (ctx) => {
  const { id } = ctx.params; //문자열이기 때문에 형변환
  const post = posts.find((p) => p.id.toString() === id);
  if (!post) {
    ctx.status = 404;
    ctx.body = {
      message: '해당 포스트가 존재하지 않습니다.',
    };
    return;
  }
  ctx.body = post;
};

/*
    특정 포스트 삭제
    DELETE /api/posts/:id
*/
export const remove = (ctx) => {
  const { id } = ctx.params;
  const index = posts.findIndex((p) => p.id.toString() === id);
  if (index === -1) {
    ctx.status = 404;
    ctx.body = {
      message: '해당 포스트가 존재하지 않습니다.',
    };
    return;
  }
  posts.splice(index, 1);
  ctx.status = 204; //No Content
};

/*
    포스트 수정(교체)
    PUT /api/posts/:id
    {title, body}
*/
export const replace = (ctx) => {
  const { id } = ctx.params;
  const index = posts.findIndex((p) => p.id.toString() === id);
  if (index === -1) {
    ctx.status = 404;
    ctx.body = {
      message: '해당 포스트는 존재하지 않습니다.',
    };
    return;
  }
  posts[index] = {
    id,
    ...ctx.request.body,
  };
  ctx.body = posts[index];
};

/*
포스트 수정(특정 필드 변경)
PATCH /api/posts/:id
{title, body}
*/
export const update = (ctx) => {
  const { id } = ctx.params;
  const index = posts.findIndex((p) => p.id.toString() === id);
  if (index === -1) {
    ctx.status = 404;
    ctx.body = {
      message: '해당 포스트를 찾을 수 없습니다.',
    };
    return;
  }
  posts[index] = {
    ...posts[index],
    ...ctx.request.body,
  };
  ctx.body = posts[index];
};
