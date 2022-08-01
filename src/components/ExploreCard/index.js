import { LazyLoadImage } from "react-lazy-load-image-component";
import Link from "next/link";

export default function ExploreCard({
  user,
  name,
  job,
  endorsements,
  skills,
  bio,
  username
}) {
  return (
    <Link href={`/${username}`}>
      <a className="flex flex-col justify-evenly border-primary rounded-md">
        <div className="flex items-center justify-between px-8 py-6 gap-x-5">
          <div className="flex gap-x-2">
            <LazyLoadImage
              className="rounded-full"
              src={user.image}
              alt={user.name}
              width={45}
              height={45}
              placeholderSrc="https://res.cloudinary.com/victoreke/image/upload/v1657357322/Spekni/placeholder_piuucr.svg"
            />
            <div>
              <h2 className="font-bold text-lg">{name}</h2>
              <p className="text-xs">{job}</p>
            </div>
          </div>

          <div className="flex items-center gap-x-1" title="Endorsements">
            <svg
              width="20"
              height="20"
              viewBox="0 0 15 15"
              alt="badge"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="7.5" cy="7.5" r="7.5" fill="#3A52EE" />
              <path
                d="M5.25366 11.5186C5.05282 11.6276 4.82493 11.4366 4.86551 11.1927L5.29737 8.58918L3.46431 6.74192C3.29313 6.56909 3.3821 6.25314 3.61156 6.21901L6.16005 5.83591L7.29641 3.45419C7.39891 3.23952 4.8826 11.2487 4.964 11.4836L8.34691 4.64505L8.91509 5.83591L11.4636 6.21901C11.693 6.25314 11.782 6.56909 11.6103 6.74192L9.77777 8.58918L10.2096 11.1927C10.2502 11.4366 10.0223 11.6276 9.82147 11.5186L7.53679 10.2768L5.29737 11.5186H5.25366Z"
                fill="white"
              />
            </svg>
            <small className="highlight">{endorsements}</small>
          </div>
        </div>

        <span className="borderLight w-full"></span>
        <p className="text-sm mt-6 mb-4 px-6 py-0">{bio}</p>

        <div className="flex flex-col flex-wrap gap-3 px-8 pb-6 pt-4">
          <div className="flex flex-wrap gap-1">
            {skills.map((skill) => (
              <small
                key={skill.id}
                className="rounded-xl border-primary p-2 py-1 bg-secondary text-xs"
              >
                {skill.skillName}
              </small>
            ))}
          </div>
        </div>
      </a>
    </Link>
  );
}
