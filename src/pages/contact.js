import { useForm } from "react-hook-form";

export default function Contact() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div className="contact">
            <h1 className="contact-title">Contact</h1>

            <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
                <div className="row">
                    <div className="col-6">
                        <input
                            type="text"
                            placeholder="Name*"
                            className="form-control"
                            autoFocus={true}
                            {...register("name", { required: true })}
                        />
                        {errors.name && <span>This field is required</span>}
                    </div>
                    <div className="col-6">
                        <input
                            type="text"
                            placeholder="Email*"
                            className="form-control"
                            {...register("email", { required: true })}
                        />
                        {errors.email && <span>This field is required</span>}
                    </div>
                </div>

                <textarea
                    placeholder="Message*"
                    className="form-control"
                    rows="5"
                    {...register("message", { required: true })}
                />
                {errors.message && <span>This field is required</span>}

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}