const OurLocation = () => {
  return (
    <section className="responsive-section py-20 flex justify-center">
      <div>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d12208.195857890203!2d89.53040457281317!3d24.5367436313458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1692854323242!5m2!1sen!2sbd&iwloc=near"
            style={{ border: 0, borderRadius: "20px" }}
            allowFullScreen={false}
            className="w-[300px] sm:w-[500px] md:w-[700px] lg:w-[800px] h-[250px] md:h-[350px]"
            allowTransparency
            loading="eager"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="py-10 flex flex-col items-center space-y-2">
          <strong className="text-xl">Charlestown, NH 03603, Route 12</strong>
          <p className="text-2xl font-bold">+8801317441769</p>
        </div>
      </div>
    </section>
  );
};

export default OurLocation;
