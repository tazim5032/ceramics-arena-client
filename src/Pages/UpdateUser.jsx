import Helmet from "react-helmet";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import UseAuth from "../Hook/UseAuth";

const UpdateUser = () => {
    const { user, updateUserProfile } = UseAuth();

    //console.log(createUser);


    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const navigate = useNavigate();
    const from = '/update';

    const onSubmit = (data) => {
        updateUserProfile(data.fullName, data.photo)
            .then(() => {
                navigate(from);
                //location.reload();
                Swal.fire({
                    icon: 'success',
                    title: 'Congrats',
                    text: 'Profile Updated!',
                });
                location.reload();
            });



    }


    return (
        <div className="bg-cyan-50 mx-[1%] md:mx[10%] lg:mx-[20%] rounded-xl">
            <Helmet>
                <title>Update Profile</title>
            </Helmet>
            <h1 className="text-2xl text-center my-10 pt-6">Your Profile</h1>

            <form onSubmit={handleSubmit(onSubmit)} className="md:w-3/4 lg:w-1/2 mx-auto"
            data-aos="zoom-in"
            data-aos-duration="1000">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Full Name</span>
                    </label>
                    <input type="text" name="name" defaultValue={user.displayName}
                        className="input input-bordered"
                        {...register("fullName", { required: true })}
                    />
                    {errors.fullName && <span className="text-red-600">Full Name is Required</span>}
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name="email" defaultValue={user.email}
                        className="input input-bordered"
                        disabled
                    />

                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <input type="text" name="photo" defaultValue={user.photoURL}
                        className="input input-bordered"
                        {...register("photo", { required: true })}
                    />
                    {errors.photo && <span className="text-red-600">Photo URL is Required</span>}
                </div>

                <div className="form-control mt-6 pb-6">
                    <button className="btn bg-black text-white font-bold text-xl">Update Profile</button>
                </div>
            </form>

        </div>
    );
};

export default UpdateUser;