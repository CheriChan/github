<template>
    <div class="box-100">
       <div class="box-100" ref="chart"></div>
    </div>
</template>


<script>

import axios from 'axios';
import echarts from 'echarts';


export default {
      
      name:"city",
      data(){

          let data = {
 
              map:null
 
          }

          return data; 
      },
      model:{

         prop:"option",
         event:"click"

      },
      props:{
          option:{

            //   default:() => ({
            //       id:"",
            //       name:"",
            //       level:""
            //   })

          }
      },
      tooltip:{},
      methods:{

          MapRender(region,mapList){

             echarts.registerMap(region, mapList); 
 
             let option = {

               
                   geo: {
                        map: region,
                        label: {
                            
                            // show: true,
                            // color:"#fff"
                            
                        },
                        itemStyle: {
                            
                            areaColor: '#323c48',
                            borderColor: '#111'
                            
                        },
                        emphasis:{

                            label:{
                                 
                                show:true,
                                color:"#fff"

                            }
                        }
                        
                    },




             }

             this.map.setOption(option);
             this.map.off("click");
             this.map.on("click",(param)=>{
                   
                  
                   let mapid = mapList.features.filter(item => item.properties.name == param.name)[0].properties.id; 
                   this.$emit("click",{id:mapid,name:param.name,level:"district"})
             
             });
          }


      },
      beforeDestroy() {
       
        if (!this.map) {
        return
        }
        this.map.setOption({});
        this.map.dispose()
        this.map = null
      },
      mounted(){

          this.map = echarts.init(this.$refs["chart"]);
           
     
          if(this.option.id.length<=6&&this.option.level!="district")
                axios.get(`static/echart/map/echart-map/json/${this.option.id}.json`).then(res => {
                    

                    this.MapRender(this.option.name,res.data);

                })
        //   else　　　
        //         this.$emit("click",{id:this.option.id,name:this.option.name,level:"district"});

          

      },
      watch:{
       
          option:{
　　　　　　　　
　　　　　　　　handler(val,oldVal){
                

                if(val.id.length<=6&&val.level!="district")
                    axios.get(`static/echart/map/echart-map/json/${val.id}.json`).then(res => {
                        
                        
                        this.MapRender(val.id,res.data);

                    })

                // else　　　
                   
                //      this.$emit("click",{id:this.option.id,name:this.option.name,level:"district"});　　　　

               },
　　　　　　　　deep:true
　　　　　}


      }


}

</script>



