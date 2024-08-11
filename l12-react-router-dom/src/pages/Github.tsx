import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

type Props = {};

interface IGithubData {
  followerCount: number;
  publicRepos: number;
  avatarUrl: string;
  repos: string;
}

const Github = ({}: Props) => {
  const { githubId } = useParams();

  const [isInvalidGithubId, setIsInvalidGithubId] = useState<boolean>(false);
  const [isIpBlocked, setIsIPBlocked] = useState<boolean>(false);

  const [data, setData] = useState<IGithubData>({
    followerCount: 0,
    publicRepos: 0,
    avatarUrl: "",
    repos: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      const getGithubProfile = async (
        githubUserId: string
      ): Promise<AxiosResponse<any>> => {
        const response = await axios.get(
          `https://api.github.com/users/${githubUserId}`
        );

        return response;
      };

      if (githubId) {
        try {
          const { data: response, status } = await getGithubProfile(githubId);

          // console.log("response: ", response);
          status === 200 &&
            setData({
              followerCount: response.followers,
              publicRepos: response.public_repos,
              avatarUrl: response.avatar_url,
              repos: response.repos_url,
            });
        } catch (err: any) {
          //   console.log("Inside 1st catch");

          try {
            const { data: response, status } = await getGithubProfile(
              "shubhamprakash681"
            );

            // console.log("response: ", response);

            setIsInvalidGithubId(true);

            status === 200 &&
              setData({
                followerCount: response.followers,
                publicRepos: response.public_repos,
                avatarUrl: response.avatar_url,
                repos: response.repos_url,
              });
          } catch (err: any) {
            setIsIPBlocked(true);
          }
        }
      }
    };

    githubId && fetchData();
  }, [githubId]);

  return (
    <>
      <div className="bg-slate-700 px-3 py-12 m-3 text-center flex flex-col justify-center">
        {isIpBlocked ? (
          <div className="flex justify-center">
            <span className="px-1 rounded-sm bg-red-50 text-red-500">
              Github has temporarily blocked your current IP. Please try after
              some time.
            </span>
          </div>
        ) : (
          <>
            {isInvalidGithubId && (
              <div className="flex justify-center">
                <span className="px-1 rounded-sm bg-red-50 text-red-500">
                  "{githubId}" is invalid. Showing data for "shubhamprakash681"
                </span>
              </div>
            )}

            <div className="flex justify-evenly my-3">
              <img
                style={{ width: "200px" }}
                src={data.avatarUrl}
                alt="avatar"
              />
            </div>

            <div className="mt-6">
              <h2>Follower count: {data.followerCount}</h2>

              <div>
                Public Repos:{" "}
                <Link target="__blank" to={data.repos}>
                  <span className=" text-blue-500 underline">
                    {data.publicRepos}
                  </span>
                </Link>
              </div>

              <Link target="__blank" to={`https://github.com/${githubId}`}>
                <span className=" text-blue-500 underline">View Profile</span>
              </Link>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Github;
