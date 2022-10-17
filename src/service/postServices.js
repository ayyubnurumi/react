import axios from "axios";

axios.defaults.baseURL = "http://localhost:3004/";

export const getPost = (setpost) => {
  const data = axios.get("posts?_sort=id&_order=desc");
  setpost([{data}])
};

export const postBlog = (post) => {
  try {axios.post("posts", post);
getPost();} 
//       this.setState({
    //         formBlogPost: {
        //           id: 1,
        //           title: "",
        //           body: "",
        //           userId: 1,
        //         },
        //       });
        //     },
        //   );
        catch (error) {
              console.log("error: ", error);
            }
        }

export const editPost = (post, setupdate) => {
    axios.put(`posts/${post.id}`, post);
    getPost();

    setupdate(false);
    // setpost([{}]);
    //       formBlogPost: {
    //         id: 1,
    //         title: "",
    //         body: "",
    //         userId: 1
    //       }
    //     })
    //   });
  };


export const delatePost = (data) => {
  //console.log(data)
  axios.delete("posts/" + data)
    getPost();
};
