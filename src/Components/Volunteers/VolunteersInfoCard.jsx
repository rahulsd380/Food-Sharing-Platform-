

const VolunteersInfoCard = ({volunteer}) => {
    const {name, phone, photo, address1} = volunteer;
    console.log(volunteer);
    return (
        <div>
            <div className="bg-gray-50 flex justify-around items-center mb-5 rounded-xl">
                <img className="w-16 rounded-full max-w-2xl" src="/src/assets/images/user.png" alt="" />
                <p className="font-semibold text-xl max-w-2xl">{name}</p>
                <p className="font-semibold text-xl">{phone}</p>
                <p className="font-semibold text-xl">{address1}</p>
                <button className="btn btn-primary">Get to me</button>
            </div>
        </div>
    );
};

export default VolunteersInfoCard;