import imageProfile from '../images/imageProfile.jpg';

export default function Profile() {
  return (
    <div className="flex flex-col items-center justify-center
      bg-default_Gradient
      p-[2px] rounded-full
      w-56">
      <img
        src={imageProfile}
        alt="Profile"
        className="min-w-[153px] rounded-full"
      />
    </div>
  );
}