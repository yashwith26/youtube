const commentsData = [
  {
    name: "Yashwith Salian",
    text: "Lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    replies: [],
  },
  {
    name: "Yashwith Salian",
    text: "Lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    replies: [
      {
        name: "Yashwith Salian",
        text: "Lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        replies: [
          {
            name: "Yashwith Salian",
            text: "Lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            replies: [
              {
                name: "Yashwith Salian",
                text: "Lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                replies: [],
              },
              {
                name: "Yashwith Salian",
                text: "Lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                replies: [
                  {
                    name: "Yashwith Salian",
                    text: "Lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                    replies: [],
                  },
                ],
              },
              {
                name: "Yashwith Salian",
                text: "Lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                replies: [],
              },
            ],
          },
        ],
      },
      {
        name: "Yashwith Salian",
        text: "Lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        replies: [],
      },
      {
        name: "Yashwith Salian",
        text: "Lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        replies: [],
      },
    ],
  },
  {
    name: "Yashwith Salian",
    text: "Lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    replies: [
      {
        name: "Yashwith Salian",
        text: "Lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        replies: [],
      },
    ],
  },
  {
    name: "Yashwith Salian",
    text: "Lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    replies: [],
  },
  {
    name: "Yashwith Salian",
    text: "Lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    replies: [
      {
        name: "Yashwith Salian",
        text: "Lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        replies: [],
      },
    ],
  },
  {
    name: "Yashwith Salian",
    text: "Lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    replies: [
      {
        name: "Yashwith Salian",
        text: "Lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        replies: [],
      },
    ],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex shadow-sm bg-gray-100 p-2 rounded-md my-2">
      <img className="w-9 h-9" src="./images/user_icon.svg" alt="user" />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className="p-5 border border-l-black ml-5">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments: </h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
