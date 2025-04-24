import React from 'react';
import { OrbitControls, useGLTF, Stage, } from '@react-three/drei';
import { Leva, useControls,folder, } from 'leva';


export default function Test(props) {
  const { nodes, materials } = useGLTF('./model/model.glb');



  
  const { r1A, rdcA, r1B, rdcB, blue, circulation, greenArrow, orange, yellow, bedroomCube } = useControls({ 
    'General': folder({
      blue: { value: true, label: 'bleu' },
      circulation: { value: true, label: 'circulation' },
      greenArrow: { value: true, label: 'flêches vertes' },
      orange: { value: true, label: 'orange' },
      yellow: { value: true, label: 'jaune' },
      bedroomCube: { value: true, label: 'cube sommeil' },
    }, { collapsed: true}),
  
    'Batiment A': folder({
      r1A: { value: true, label: 'R1' },
      rdcA: { value: true, label: 'RDC' }
    }, { collapsed: true}),
  
    'Batiment B': folder({
      r1B: { value: true, label: 'R1' },
      rdcB: { value: true, label: 'RDC' }
    }, { collapsed: true}),
  });


  
  return (
    <>
 

  <Stage intensity={0.1} 
          adjustCamera={false}
  
  >

      {/* <ambientLight intensity={0.2} /> */}
      {/* <directionalLight position={[10, 10, 10]} intensity={0.8} castShadow /> */}
      <OrbitControls minPolarAngle={0} maxPolarAngle={Math.PI / 2} />

  
      <group {...props} dispose={null}>

      {/* R1-A */}

      <group visible={r1A}>
        <mesh
          name="Floor-R1A"
          castShadow
          receiveShadow
          geometry={nodes['Floor-R1A'].geometry}
          material={materials['Material.002']}
          position={[0.288, 0.061, 0.07]}
          rotation={[Math.PI, -1.529, Math.PI]}
          scale={0.046}
        />
        <mesh
          name="orange-R1A"
          castShadow
          receiveShadow
          geometry={nodes['orange-R1A'].geometry}
          material={materials['Material.004']}
          position={[0.258, 0.06, -0.012]}
          rotation={[Math.PI, -1.529, Math.PI]}
          scale={0.027}
          visible={orange}
        />
        <mesh
          name="sommeil"
          castShadow
          receiveShadow
          geometry={nodes.sommeil.geometry}
          material={materials['mat-som']}
          position={[0.254, 0.063, 0.046]}
          rotation={[0, -0.042, 0]}
          scale={-0.004}
          visible={bedroomCube}
        />
        <mesh
          name="orangeR1A"
          castShadow
          receiveShadow
          geometry={nodes.orangeR1A.geometry}
          material={materials['Material.004']}
          position={[-0.238, -0.758, -1.468]}
          visible={orange}
        />
        <mesh
          name="Wall-R1-A"
          castShadow
          receiveShadow
          geometry={nodes['Wall-R1-A'].geometry}
          material={materials['Material.001']}
          position={[-0.238, -0.755, -1.468]}
        />
        <mesh
          name="stair-R1A005"
          castShadow
          receiveShadow
          geometry={nodes['stair-R1A005'].geometry}
          material={materials['wire_028089177.001']}
          position={[0.307, 0.047, 0.05]}
          rotation={[Math.PI / 2, 0, 1.612]}
          scale={[0.002, 0.009, 0.009]}
        />
        <mesh
          name="stair-R1A004"
          castShadow
          receiveShadow
          geometry={nodes['stair-R1A004'].geometry}
          material={materials['wire_028089177.001']}
          position={[0.307, 0.047, 0.041]}
          rotation={[Math.PI / 2, 0, 1.612]}
          scale={[0.003, 0.009, 0.009]}
        />
        <mesh
          name="stair-R1A006"
          castShadow
          receiveShadow
          geometry={nodes['stair-R1A006'].geometry}
          material={materials['wire_028089177.001']}
          position={[0.267, 0.046, -0.068]}
          rotation={[Math.PI / 2, 0, -1.529]}
          scale={[0.001, 0.009, 0.009]}
        />

      </group>

      {/* RDC-A */}
      <group visible={rdcA}>

        <mesh
          name="stair-R1A001"
          castShadow
          receiveShadow
          geometry={nodes['stair-R1A001'].geometry}
          material={materials['Material.001']}
          position={[0.347, 0.02, -0.068]}
          rotation={[Math.PI / 2, 0, -1.529]}
          scale={[0.003, 0.009, 0.009]}
        />

        <group name="wall-rdca" position={[-0.238, -0.755, -1.468]}>
          <mesh
            name="wall-RDCA"
            castShadow
            receiveShadow
            geometry={nodes['wall-RDCA'].geometry}
            material={materials['Material.001']}
          />
          <mesh
            name="wall-RDCA_1"
            castShadow
            receiveShadow
            geometry={nodes['wall-RDCA_1'].geometry}
            material={materials['Material.002']}
          />
        </group>
        <mesh
          name="stair-RDCA001"
          castShadow
          receiveShadow
          geometry={nodes['stair-RDCA001'].geometry}
          material={materials['wire_028089177.001']}
          position={[0.275, 0.023, -0.072]}
          rotation={[Math.PI / 2, 0, 1.612]}
          scale={[0.001, 0.009, 0.008]}
        />
        <mesh
          name="stair-RDCA"
          castShadow
          receiveShadow
          geometry={nodes['stair-RDCA'].geometry}
          material={materials['wire_028089177.001']}
          position={[0.307, 0.023, 0.041]}
          rotation={[Math.PI / 2, 0, 1.612]}
          scale={[0.003, 0.009, 0.009]}
        />
        <mesh
          name="floor-rdca"
          castShadow
          receiveShadow
          geometry={nodes['floor-rdca'].geometry}
          material={materials['Material.002']}
          position={[-0.238, -0.755, -1.468]}
        />

      <group
      name="yellow_cube"
      position={[0.32, 0.02, -0.152]}
      rotation={[0, -0.113, 0]}
      scale={0.004}
      visible={yellow}
      >
        <mesh
          name="Cube008"
          castShadow
          receiveShadow
          geometry={nodes.Cube008.geometry}
          material={materials['Material.009']}

        />
        <mesh
          name="Cube008_1"
          castShadow
          receiveShadow
          geometry={nodes.Cube008_1.geometry}
          material={materials['mat-elec.002']}
        />
      </group>
      <mesh
        name="yellow"
        castShadow
        receiveShadow
        geometry={nodes.yellow.geometry}
        material={materials['yellow.001']}
        position={[0.305, 0.019, -0.124]}
        rotation={[0, -0.027, 0]}
        scale={-0.01}
         visible={yellow}

      />
      <group name="yellow_cube001" 
      position={[0.301, 0.023, -0.125]} 
      scale={0.004}
      visible={yellow}

      >
        <mesh
          name="Cube007"
          castShadow
          receiveShadow
          geometry={nodes.Cube007.geometry}
          material={materials['Material.008']}
        />
        <mesh
          name="Cube007_1"
          castShadow
          receiveShadow
          geometry={nodes.Cube007_1.geometry}
          material={materials['mat-elec']}
        />
      </group>
      <mesh
        name="yellow001"
        castShadow
        receiveShadow
        geometry={nodes.yellow001.geometry}
        material={materials.yellow}
        position={[0.265, 0.019, -0.095]}
        rotation={[0, -0.027, 0]}
        scale={-0.01}
      visible={yellow}

      />

    </group>



    {/* R1-B */}

    <group visible={r1B}>
      <mesh
        name="orange-R1B001"
        castShadow
        receiveShadow
        geometry={nodes['orange-R1B001'].geometry}
        material={materials['Material.006']}
        position={[0.398, 0.058, 0.161]}
        rotation={[Math.PI, -1.529, Math.PI]}
        scale={0.027}
        visible={orange}
      />
      <mesh
        name="orange-R1B"
        castShadow
        receiveShadow
        geometry={nodes['orange-R1B'].geometry}
        material={materials['Material.007']}
        position={[0.444, 0.058, 0.149]}
        rotation={[Math.PI, -1.529, Math.PI]}
        scale={0.027}
        visible={orange}
      />
       <group name="floor-R1B" position={[-0.238, -0.758, -1.468]}>
        <mesh
          name="Plane002"
          castShadow
          receiveShadow
          geometry={nodes.Plane002.geometry}
          material={materials['Material.002']}
        />
        <mesh
          name="Plane002_1"
          castShadow
          receiveShadow
          geometry={nodes.Plane002_1.geometry}
          material={materials['Material.001']}
        />
      </group>
      <mesh
        name="stair-R1B"
        castShadow
        receiveShadow
        geometry={nodes['stair-R1B'].geometry}
        material={materials['wire_028089177.001']}
        position={[0.384, 0.046, 0.218]}
        rotation={[Math.PI / 2, 0, -1.529]}
        scale={[0.002, 0.007, 0.007]}
      />
       <mesh
        name="stairR1B"
        castShadow
        receiveShadow
        geometry={nodes.stairR1B.geometry}
        material={materials['wire_028089177.003']}
      />
      <mesh
        name="stairR1B001"
        castShadow
        receiveShadow
        geometry={nodes.stairR1B001.geometry}
        material={materials['wire_028089177.001']}
        position={[0.384, 0.046, 0.229]}
        rotation={[Math.PI / 2, 0, -1.529]}
        scale={[0.002, 0.007, 0.007]}
      />
      <group name="wall-R1B" position={[-0.238, -0.755, -1.468]}>
        <mesh
          name="BL|block_2_curve_006"
          castShadow
          receiveShadow
          geometry={nodes['BL|block_2_curve_006'].geometry}
          material={materials['Material.017']}
        />
        <mesh
          name="BL|block_2_curve_006_1"
          castShadow
          receiveShadow
          geometry={nodes['BL|block_2_curve_006_1'].geometry}
          material={materials['Material.016']}
        />
      </group>

    </group>


    {/* RDC-B */}

    <group visible ={rdcB}>
      <mesh
        name="wall-rdcb"
        castShadow
        receiveShadow
        geometry={nodes['wall-rdcb'].geometry}
        material={materials['Material.001']}
        position={[-0.238, -0.755, -1.468]}
      />

      <mesh
        name="stairRDC-B002"
        castShadow
        receiveShadow
        geometry={nodes['stairRDC-B002'].geometry}
        material={materials['wire_028089177.002']}
        position={[0.428, 0.026, 0.02]}
        rotation={[Math.PI / 2, 0, -3.1]}
        scale={[0.002, 0.008, 0.008]}
      />
      <mesh
        name="floor-RDCB"
        castShadow
        receiveShadow
        geometry={nodes['floor-RDCB'].geometry}
        material={materials['Material.002']}
        position={[-0.238, -0.758, -1.468]}
      />
      
    
      <mesh
        name="stairRDC-B001"
        castShadow
        receiveShadow
        geometry={nodes['stairRDC-B001'].geometry}
        material={materials['wire_028089177.001']}
        position={[0.384, 0.019, 0.218]}
        rotation={[Math.PI / 2, 0, -1.529]}
        scale={[0.002, 0.007, 0.007]}
      />
      <mesh
        name="stairRDC-B"
        castShadow
        receiveShadow
        geometry={nodes['stairRDC-B'].geometry}
        material={materials['wire_028089177.001']}
        position={[0.384, 0.019, 0.228]}
        rotation={[Math.PI / 2, 0, -1.529]}
        scale={[0.002, 0.007, 0.007]}
      />

      <mesh
        name="floorSSI"
        castShadow
        receiveShadow
        geometry={nodes.floorSSI.geometry}
        material={materials['Material.010']}
      />
      <mesh
        name="SSI"
        castShadow
        receiveShadow
        geometry={nodes.SSI.geometry}
        material={nodes.SSI.material}
        position={[0.441, 0.031, 0.094]}
        scale={0.013}
      />
 
    </group>






      <mesh
        name="satellitePlane"
        castShadow
        receiveShadow
        geometry={nodes.satellitePlane.geometry}
        material={materials.planTest}
        position={[-0.238, -0.758, -1.468]}
      />
     
 
      <mesh
        name="elevator002"
        castShadow
        receiveShadow
        geometry={nodes.elevator002.geometry}
        material={materials['Material.005']}
        position={[0.335, 0.066, 0.088]}
        scale={0.004}
      />
      <mesh
        name="elevator001"
        castShadow
        receiveShadow
        geometry={nodes.elevator001.geometry}
        material={materials['Material.005']}
        position={[0.375, 0.066, 0.047]}
        rotation={[0, -0.048, 0]}
        scale={0.004}
      />
    
     
      
   
      
      <group visible={blue}>

        <mesh
          name="blue002"
          castShadow
          receiveShadow
          geometry={nodes.blue002.geometry}
          material={materials['blue.001']}
          position={[0.664, 0.029, 0.311]}
          scale={0.015}
        />
        <mesh
          name="blue001"
          castShadow
          receiveShadow
          geometry={nodes.blue001.geometry}
          material={materials['blue.001']}
          position={[-0.152, 0.023, -0.293]}
          scale={0.015}
        />
      </group>
  
      <group visible={circulation}>
        <mesh
          name="white-arrow"
          castShadow
          receiveShadow
          geometry={nodes['white-arrow'].geometry}
          material={materials['Material.018']}
          position={[-0.238, -0.758, -1.468]}
        />
        <mesh
          name="white-arrow001"
          castShadow
          receiveShadow
          geometry={nodes['white-arrow001'].geometry}
          material={materials['Material.019']}
          position={[0.293, 0.019, 0.289]}
        />

        <mesh
          name="rect-black-circu"
          castShadow
          receiveShadow
          geometry={nodes['rect-black-circu'].geometry}
          material={materials['mat-black']}
          position={[0.302, 0.016, 0.059]}
          scale={-0.23}
        />
        
      </group>

      <group visible={greenArrow}>
      <mesh
        name="green-arrow-RDCA"
        castShadow
        receiveShadow
        geometry={nodes['green-arrow-RDCA'].geometry}
        material={materials['Mat-green']}
        position={[0.287, 0.019, 0.147]}
        scale={0.671}
      />
      <mesh
        name="green-arrow-RDCAB"
        castShadow
        receiveShadow
        geometry={nodes['green-arrow-RDCAB'].geometry}
        material={materials['Mat-green.001']}
        position={[0.389, 0.022, 0.263]}
        scale={0.671}
      />
      <mesh
        name="green-arrow-R1A"
        castShadow
        receiveShadow
        geometry={nodes['green-arrow-R1A'].geometry}
        material={materials['Mat-green.002']}
        position={[0.216, 0.067, 0.045]}
        rotation={[Math.PI, -1.502, Math.PI]}
        scale={0.51}
      />
      <mesh
        name="green-arrow-RDCA001"
        castShadow
        receiveShadow
        geometry={nodes['green-arrow-RDCA001'].geometry}
        material={materials['Mat-green.003']}
        position={[0.28, 0.019, -0.158]}
        rotation={[Math.PI, -0.018, Math.PI]}
        scale={0.51}
      />
    
      </group>
     
      
     
    </group>

   
      </Stage>
    </>
  );
}

useGLTF.preload('./model/model.glb');