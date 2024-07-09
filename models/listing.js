const mongoose =require("mongoose");
const Schema=mongoose.Schema;

const listingSchema=new Schema({
	title:
	{ type:String,
	 required:true,
		
	},
	description:String,
	image:{
		type:String,
		default:"https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fbeach-at-sunset&psig=AOvVaw0ukTJfTjVXjpvaxVo5yPfU&ust=1709049729759000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCOjqyL-wyYQDFQAAAAAdAAAAABAP",
		set:(v)=>v===""?"https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fbeach-at-sunset&psig=AOvVaw0ukTJfTjVXjpvaxVo5yPfU&ust=1709049729759000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCOjqyL-wyYQDFQAAAAAdAAAAABAP":v,
		},
	price:Number,
	location:String,
	country:String,
	reviews:[
		{
			type:Schema.Types.ObjectId,
			ref:"Review",
	
		}
	]
	
	

});
const Listing=mongoose.model("Listing",listingSchema);
module.exports=Listing;