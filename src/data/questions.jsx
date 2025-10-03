import { BookOpen, Microscope, Atom, Leaf } from 'lucide-react';

export const sections = {
  botany: {
    name: 'Botany',
    icon: <Leaf className="w-6 h-6" />,
    color: 'bg-green-500',
    questions: [
      // You can populate Botany questions here if needed
    ]
  },
  zoology: {
    name: 'Zoology',
    icon: <Microscope className="w-6 h-6" />,
    color: 'bg-blue-500',
    questions: [
      // You can populate Zoology questions here if needed
    ]
  },
  physics: {
    name: 'Physics',
    icon: <Atom className="w-6 h-6" />,
    color: 'bg-purple-500',
    questions: [
      {
        id: 1,
        question: `
          Two point charges +Q and –Q are separated by a distance 2a in vacuum. 
          What is the magnitude of the electric field at a point P located at a distance 
          a along the perpendicular bisector of the line joining the charges?
        `,
        answer: `
          \\[
            E \;=\; \frac{1}{4\\pi\\varepsilon_0}\\frac{Q}{a^2}.
          \\]
          Explanation:
          Each charge is at distance \\(r = \\sqrt{a^2 + a^2} = a\\sqrt{2}\\) from P. 
          The horizontal components cancel, and the vertical components add:
          \\[
            E = 2 \\cdot \\left( \\frac{kQ}{(a\\sqrt{2})^2} \\cdot \\frac{a}{a\\sqrt{2}} \\right)
              = \\frac{kQ}{a^2}, 
            \\quad k = \\frac{1}{4\\pi\\varepsilon_0}.
          \\]
        `
      },
      {
        id: 2,
        question: `
          A uniformly charged infinitely long cylinder of radius \\(R\\) has volume charge density 
          \\(\\rho\\). What is the magnitude of the electric field inside the cylinder at a radial 
          distance \\(r < R\\)?
        `,
        answer: `
          \\[
            E(r) \;=\; \\frac{\\rho\\,r}{2\\,\\varepsilon_0}.
          \\]
          Explanation:
          By Gauss’s law for a cylindrical Gaussian surface of radius \\(r\\) and length \\(L\\):
          \\[
            E \\cdot (2\\pi r L) \;=\; \\frac{\\rho\\,(\\pi r^2 L)}{\\varepsilon_0} 
            \\;\Longrightarrow\; E = \\frac{\\rho\\,r}{2\\varepsilon_0}.
          \\]
        `
      },
      {
        id: 3,
        question: `
          Four point charges, each of magnitude +q, are placed at the corners of a square of side \\(a\\). 
          What is the electric potential at the centre of the square? (Take \\(V(\\infty)=0\\).)
        `,
        answer: `
          Each corner is at distance \\(r = \\frac{a}{\\sqrt{2}}\\) from the centre. Thus
          \\[
            V_{\\text{centre}} 
            = 4 \\times \\frac{1}{4\\pi\\varepsilon_0} \\cdot \\frac{q}{\\frac{a}{\\sqrt{2}}}
            = \\frac{4q}{4\\pi\\varepsilon_0} \\cdot \\frac{\\sqrt{2}}{a}
            = \\frac{\\sqrt{2}\\,q}{\\pi\\varepsilon_0\\,a}.
          \\]
        `
      },
      {
        id: 4,
        question: `
          A thin spherical shell of radius \\(R\\) carries a surface charge density \\(\\sigma\\). 
          What is the potential difference \\(V(R) - V(2R)\\)? 
          (Reference: \\(V(\\infty)=0\\).)
        `,
        answer: `
          Total charge \\(Q = 4\\pi R^2\\,\\sigma\\). Then
          \\[
            V(R) = \\frac{1}{4\\pi\\varepsilon_0} \\cdot \\frac{Q}{R}, 
            \\quad
            V(2R) = \\frac{1}{4\\pi\\varepsilon_0} \\cdot \\frac{Q}{2R}.
          \\]
          So
          \\[
            V(R) - V(2R)
            = \\frac{Q}{4\\pi\\varepsilon_0} \\Bigl( \\frac{1}{R} - \\frac{1}{2R} \\Bigr)
            = \\frac{Q}{8\\pi\\varepsilon_0\\,R}
            = \\frac{4\\pi R^2\\,\\sigma}{8\\pi\\varepsilon_0\\,R}
            = \\frac{\\sigma\\,R}{2\\,\\varepsilon_0}.
          \\]
        `
      },
      {
        id: 5,
        question: `
          An isolated conducting sphere of radius \\(a\\) carries a total charge +Q. 
          It is surrounded coaxially by a conducting spherical shell of inner radius \\(b\\) 
          and outer radius \\(c\\) (\\(b > a\\)). The shell is grounded. What is the capacitance 
          between the inner sphere and ground?
        `,
        answer: `
          When the outer shell is grounded, it is effectively at zero potential. The inner sphere 
          behaves exactly like an isolated sphere of radius \\(a\\). Thus
          \\[
            C = 4\\pi\\varepsilon_0\\,a.
          \\]
        `
      },
      {
        id: 6,
        question: `
          A parallel‐plate capacitor (area \\(A\\), separation \\(d\\)) is charged to potential \\(V\\) 
          and then disconnected from the battery. A slab of dielectric constant \\(K\\) is inserted 
          fully. Which of the following statements are true?
          
          1. Charge on plates remains the same.  
          2. Potential difference across plates decreases to \\(V/K\\).  
          3. Energy stored increases by a factor \\(K\\).  
          4. Energy stored decreases by a factor \\(K\\).  
        `,
        answer: `
          1. True (battery is disconnected → no path for charge to flow).  
          2. True 
             \\[
               C_{\\text{new}} = K C_{0}, \\quad Q = C_{0}V \\implies V_{\\text{new}} = \\frac{Q}{C_{\\text{new}}} = \\frac{V}{K}.
             \\]
          3. False.  
          4. True 
             \\[
               U_{\\text{old}} = \\tfrac{Q^2}{2C_{0}}, \\quad U_{\\text{new}} = \\tfrac{Q^2}{2(KC_{0})} = \\frac{1}{K}U_{\\text{old}}.
             \\]
        `
      },
      {
        id: 7,
        question: `
          A solid nonconducting sphere of radius \\(R\\) has uniform volume charge density \\(\\rho\\). 
          What is the potential at \\(r = \\tfrac{R}{2}\\) (with \\(V(\\infty)=0\\))?
        `,
        answer: `
          For \\(r \\le R\\), 
          \\[
            V(r) = \\frac{\\rho}{6\\varepsilon_0}\\Bigl(3R^2 - r^2\\Bigr).
          \\]
          Hence at \\(r = R/2\\):
          \\[
            V\\Bigl( \\tfrac{R}{2} \\Bigr)
            = \\frac{\\rho}{6\\varepsilon_0} \\Bigl(3R^2 - \\tfrac{R^2}{4}\\Bigr)
            = \\frac{\\rho}{6\\varepsilon_0} \\cdot \\frac{11R^2}{4}
            = \\frac{11\\,\\rho\\,R^2}{24\\,\\varepsilon_0}.
          \\]
          In terms of total charge \\(Q = \\tfrac{4}{3}\\pi R^3\\,\\rho\\),  
          \\[
            V\\Bigl(\\tfrac{R}{2}\\Bigr)
            = \\frac{11}{24\\,\\varepsilon_0} \\cdot \\frac{3Q}{4\\pi R^3} \\cdot R^2
            = \\frac{11Q}{32\\pi\\varepsilon_0\\,R}.
          \\]
        `
      },
      {
        id: 8,
        question: `
          A point charge +Q is placed at the centre of a hollow conducting spherical shell 
          (inner radius \\(a\\), outer radius \\(b\\)). What is the electric field at a point \\(r\\) 
          such that \\(a < r < b\\)?
        `,
        answer: `
          Inside the conducting material, \\(E = 0\\) (electrostatic shielding).  
          Therefore, for \\(a < r < b,\\)  
          \\[
            E(r) = 0.
          \\]
        `
      },
      {
        id: 9,
        question: `
          A parallel‐plate capacitor (vacuum) of capacitance \\(C_0\\) is connected to a 12 V battery. 
          After charging, the battery is disconnected and a dielectric slab \\(K=4\\) is inserted fully. 
          The original energy was \\(U_0 = \\tfrac{1}{2}C_0(12)^2\\). 
          The new stored energy is:
          
          (A) \\(U_0/4\\)  
          (B) \\(U_0\\)  
          (C) \\(4\,U_0\\)  
          (D) \\(2\,U_0\\)  
        `,
        answer: `
          Since \\(Q\\) remains constant (battery disconnected) and \\(C_{\\text{new}} = 4C_0\\),
          \\[
            U_{\\text{new}} = \\frac{Q^2}{2\,C_{\\text{new}}} 
            = \\frac{Q^2}{2\\,(4C_0)} 
            = \\frac{1}{4} \\cdot \\frac{Q^2}{2C_0} 
            = \\frac{U_0}{4}.
          \\]
          So correct choice: (A) \\(U_0/4\\).
        `
      },
      {
        id: 10,
        question: `
          An infinitely large plane slab of thickness \\(2a\\) has uniform volume charge density \\(\\rho\\). 
          Find the electric field at a point a distance \\(x\\) from its mid‐plane, where \\(0 < x < a\\).
        `,
        answer: `
          By Gauss’s law for a slab, inside the thickness (\\(|x| < a\\)):
          \\[
            E(x) = \\frac{\\rho\,x}{\\varepsilon_0}, 
            \\quad \\text{(directed normal to the slab).}
          \\]
          Outside (\\(|x| > a\\)), \\(E = \\rho a/\\varepsilon_0\\) (constant).
        `
      },
      {
        id: 11,
        question: `
          A thin ring of radius \\(R\\) carries a uniform total charge \\(+Q\\). A small charge \\(+q\\) 
          is placed on the axis at \\(x = R\\) from the centre. What is the magnitude of the force on \\(+q\\)?
        `,
        answer: `
          The axial field at distance \\(x = R\\) is
          \\[
            E_x = \\frac{1}{4\\pi\\varepsilon_0} \\cdot \\frac{Q\\,x}{(R^2 + x^2)^{3/2}} 
            \\quad \\text{with} \\; x = R.
          \\]
          Hence
          \\[
            E_x = \\frac{1}{4\\pi\\varepsilon_0} \\cdot \\frac{Q\\,R}{\\bigl(R^2 + R^2\\bigr)^{3/2}}
                = \\frac{1}{4\\pi\\varepsilon_0} \\cdot \\frac{Q\\,R}{(2R^2)^{3/2}}
                = \\frac{Q}{8\\sqrt{2}\\,\\pi\\varepsilon_0\\,R^2}.
          \\]
          Therefore,
          \\[
            F = q\,E_x = \\frac{Q\,q}{8\\sqrt{2}\\,\\pi\\varepsilon_0\\,R^2}.
          \\]
        `
      },
      {
        id: 12,
        question: `
          A parallel‐plate capacitor with plate area \\(A\\) and separation \\(d\\) is half‐filled by a 
          dielectric \\(K=3\\) (slab thickness \\(d/2\\)), the other half is vacuum. 
          Find its equivalent capacitance in terms of \\(\\varepsilon_0 A / d\\).
        `,
        answer: `
          Model as two capacitors in series:
          \\[
            C_1 = \\frac{2\\varepsilon_0 K A}{d} = \\frac{2\\times3\\,\\varepsilon_0 A}{d} = \\frac{6\\varepsilon_0 A}{d}, 
            \\quad
            C_2 = \\frac{2\\varepsilon_0 A}{d}.
          \\]
          In series,
          \\[
            \\frac{1}{C} = \\frac{1}{C_1} + \\frac{1}{C_2}
            = \\frac{d}{6\\varepsilon_0 A} + \\frac{d}{2\\varepsilon_0 A}
            = \\frac{d}{6\\varepsilon_0 A} + \\frac{3d}{6\\varepsilon_0 A}
            = \\frac{4d}{6\\varepsilon_0 A}
            = \\frac{2d}{3\\varepsilon_0 A}.
          \\]
          Hence
          \\[
            C = \\frac{3\\varepsilon_0 A}{2d}.
          \\]
        `
      },
      {
        id: 13,
        question: `
          A dielectric slab of constant \\(K\\) is inserted fully into a parallel‐plate capacitor 
          (original capacitance \\(C_0\\)) with the battery still connected (\\(V=100\\) V). 
          Find the new energy stored in terms of \\(C_0\\) and \\(K\\).
        `,
        answer: `
          When the battery remains connected,
          \\[
            C_{\\text{new}} = K\,C_0, 
            \\quad V = 100\\text{ V (constant)}.
          \\]
          Energy:
          \\[
            U_{\\text{new}} 
            = \\tfrac{1}{2} C_{\\text{new}} V^2 
            = \\tfrac{1}{2} (K C_0) (100)^2 
            = K \\cdot \\bigl[\\tfrac{1}{2} C_0 (100)^2\\bigr] 
            = K\,U_0.
          \\]
        `
      },
      {
        id: 14,
        question: `
          A solid insulating sphere of radius \\(R\\) has a nonuniform charge density 
          \\(\\rho(r) = \\rho_0\\,\\frac{r}{R}\\) (varies linearly). 
          Find the electric field at a point \\(r < R\\).
        `,
        answer: `
          Enclosed charge:
          \\[
            Q_{\\rm enc}(r) 
            = \\int_{0}^{r} \\rho_0 \\frac{r'}{R} \\cdot 4\\pi r'^2 \\,dr'
            = \\frac{4\\pi \\rho_0}{R} \\int_{0}^{r} r'^3 \\,dr'
            = \\frac{4\\pi \\rho_0}{R} \\cdot \\frac{r^4}{4}
            = \\pi \\rho_0 \\frac{r^4}{R}.
          \\]
          By Gauss’s law,
          \\[
            E(4\\pi r^2) = \\frac{Q_{\\rm enc}(r)}{\\varepsilon_0}
            \\;\Longrightarrow\;
            E(r) 
            = \\frac{1}{4\\pi\\varepsilon_0} \\cdot \\frac{\\pi \\rho_0 \\tfrac{r^4}{R}}{r^2}
            = \\frac{\\rho_0}{4\\,\\varepsilon_0} \\cdot \\frac{r^2}{R}.
          \\]
        `
      },
      {
        id: 15,
        question: `
          A point charge +Q is at the origin. What is the potential difference 
          \\(V(2a) - V(a/2)\\) on the x-axis? (Reference: \\(V(\\infty) = 0\\).)
        `,
        answer: `
          \\[
            V(r) = \\frac{1}{4\\pi\\varepsilon_0} \\cdot \\frac{Q}{r}.
          \\]
          Therefore,
          \\[
            V(2a) - V(a/2)
            = \\frac{Q}{4\\pi\\varepsilon_0} \\Bigl( \\frac{1}{2a} - \\frac{1}{\\tfrac{a}{2}} \\Bigr)
            = \\frac{Q}{4\\pi\\varepsilon_0} \\Bigl( \\frac{1}{2a} - \\frac{2}{a} \\Bigr)
            = \\frac{Q}{4\\pi\\varepsilon_0\\,a} \\Bigl( \\tfrac{1}{2} - 2 \\Bigr)
            = -\\frac{3Q}{8\\pi\\varepsilon_0\\,a}.
          \\]
          (Negative sign indicates \\(V(a/2)\\) is higher than \\(V(2a)\\).)
        `
      },
      {
        id: 16,
        question: `
          Two identical small conducting spheres, each of mass \\(m\\), are connected by an 
          insulating spring of natural length \\(L\\) and spring constant \\(k\\). They are each 
          given charge +Q, then released to equilibrium, stretching the spring to length \\(L'\\). 
          Derive the equation that determines \\(L'\\).
        `,
        answer: `
          At equilibrium:
          \\[
            F_{\\rm spring} \\,=\\, F_{\\rm electrostatic} 
            \\quad\\Longrightarrow\\quad
            k\\,(L' - L) \\,=\\, \\frac{1}{4\\pi\\varepsilon_0} \\cdot \\frac{Q^2}{(L')^2}.
          \\]
          This must be solved for \\(L'\\).
        `
      },
      {
        id: 17,
        question: `
          A thin hemispherical shell of radius \\(R\\) is uniformly charged with total charge +Q. 
          What is the potential at the centre of its flat face? (Take \\(V(\\infty)=0\\).)
        `,
        answer: `
          Known result:
          \\[
            V_{\\text{centre}} 
            = \\frac{Q}{8\\pi\\varepsilon_0\,R} \\bigl(1 + \\pi\\bigr).
          \\]
          Sketch of derivation: integrate contributions from rings at polar angle \\(\\theta\\). 
        `
      },
      {
        id: 18,
        question: `
          A coaxial cylindrical capacitor has inner radius \\(a\\), outer radius \\(b\\), and length \\(L\\). 
          Find its capacitance per unit length.
        `,
        answer: `
          \\[
            C' = \\frac{2\\pi\\varepsilon_0}{\\ln\\bigl(\\tfrac{b}{a}\\bigr)}.
          \\]
        `
      },
      {
        id: 19,
        question: `
          Three point charges occupy the vertices of a right-angled isosceles triangle: two charges +Q 
          at the ends of the base (distance \\(a\\) apart), and –Q at the right-angle vertex. 
          What is the net electric field at the right-angle vertex?
        `,
        answer: `
          Place –Q at \\(C(0,0)\\), +Q at \\(A(a,0)\\) and +Q at \\(B(0,a)\\). We want \\(\\vec{E}_C\\):
          
          • Field from +Q at A (distance \\(a\\) to the right):  
            \\[
              \\vec{E}_A = \\frac{kQ}{a^2} \\,\\hat{i}.
            \\]
          
          • Field from +Q at B (distance \\(a\\) upward):  
            \\[
              \\vec{E}_B = \\frac{kQ}{a^2} \\,\\hat{j}.
            \\]
          
          • Field from –Q at C itself is zero.  
          
          Net:
          \\[
            \\vec{E}_C = \\frac{kQ}{a^2}(\\hat{i} + \\hat{j}).
          \\]
          Magnitude:
          \\[
            |\\vec{E}| = \\frac{kQ}{a^2} \\sqrt{1^2 + 1^2} = \\frac{\\sqrt{2}\\,kQ}{a^2}.
          \\]
          Direction: along the line \\(y=x\\) (45° above +x-axis).
        `
      },
      {
        id: 20,
        question: `
          A dipole of moment \\(\\vec{p}\\) is placed in a uniform electric field \\(\\vec{E}\\). 
          What is its potential energy when the angle between \\(\\vec{p}\\) and \\(\\vec{E}\\) is \\(\\theta\\)?
        `,
        answer: `
          \\[
            U(\\theta) = -\\,\\vec{p} \\cdot \\vec{E} = -\,p\,E\\,\\cos\\theta.
          \\]
        `
      },
      // Five image-based NEET/AIMTS-style electrostatics questions
      {
        id: 21,
        question: `
          Refer to the diagram below. Two infinite parallel conducting plates are separated by distance \\(d\\), 
          with the upper plate held at potential \\(V_0\\) and the lower plate grounded. A point charge +q 
          is placed exactly midway between them.  
          What is the magnitude of the net force on +q?  
          (Assume vacuum between plates, and neglect edge effects.)
        `,
        image: (
          <img
            src="/images/electrostatics_q21.png"
            alt="Two infinite parallel plates, separation d, upper plate at V0, lower grounded, charge q at midpoint"
            className="mx-auto my-4 border"
          />
        ),
        answer: `
          The point charge at the midplane experiences zero net force (equipotential midway).  
          Explanation:
          By symmetry, induced charges on both plates are equal and opposite, creating equal and opposite forces on +q, so they cancel.
        `
      },
      {
        id: 22,
        question: `
          The figure below shows an electric dipole consisting of charges +q and –q separated by a fixed distance 
          2a, placed in a uniform field \\(E\\) pointing to the right. The dipole is aligned at an angle \\(\\theta\\) 
          with respect to the field.  
          Determine the torque experienced by the dipole.
        `,
        image: (
          <img
            src="/images/electrostatics_q22.png"
            alt="Dipole at angle theta in uniform electric field E"
            className="mx-auto my-4 border"
          />
        ),
        answer: `
          \\[
            \\tau = p\,E\\,\\sin\\theta, 
            \\quad \\text{where } p = q \\cdot (2a).
          \\]
          Direction out of the plane (right-hand rule).
        `
      },
      {
        id: 23,
        question: `
          In the diagram below, a uniformly charged semicircular rod of radius \\(R\\) (charge density \\(\\lambda\\)) 
          lies in the xy-plane from angle \\(0\\) to \\(\\pi\\). Find the electric field at the centre of curvature (origin).
        `,
        image: (
          <img
            src="/images/electrostatics_q23.png"
            alt="Semicircular rod from 0 to pi with uniform linear charge density lambda"
            className="mx-auto my-4 border"
          />
        ),
        answer: `
          For a semicircular arc:
          \\[
            E_x = 0, 
            \\quad 
            E_y = \\frac{1}{4\\pi\\varepsilon_0} \\cdot \\frac{2\\lambda}{R}.
          \\]
          Magnitude:  
          \\[
            E = \\frac{\\lambda}{2\\pi\\varepsilon_0 R}, 
            \\quad \\text{directed along +y (towards flat face).}
          \\]
          (Because vertical components of all \\(dq\\) add, horizontal cancel.)
        `
      },
      {
        id: 24,
        question: `
          The figure below shows a point charge +Q at the centre of a square of side \\(a\\). A small test charge +q 
          is placed at one corner. What is the net force on +q?  
        `,
        image: (
          <img
            src="/images/electrostatics_q24.png"
            alt="Square of side a with central charge +Q and test charge +q at one corner"
            className="mx-auto my-4 border"
          />
        ),
        answer: `
          Distance from centre to corner: \\(r = \\tfrac{a}{\\sqrt{2}}\\).  
          Electric field at corner due to +Q at centre:
          \\[
            E = \\frac{1}{4\\pi\\varepsilon_0} \\cdot \\frac{Q}{\\bigl(\\tfrac{a}{\\sqrt{2}}\\bigr)^2} 
              = \\frac{1}{4\\pi\\varepsilon_0} \\cdot \\frac{2Q}{a^2}.
          \\]
          Direction: from corner toward centre (along diagonal).  
          Therefore, force on +q:
          \\[
            F = q\,E = \\frac{2kQq}{a^2}, 
            \\quad \\text{directed inward along the diagonal.}
          \\]
        `
      },
      {
        id: 25,
        question: `
          In the diagram below, a metallic sphere of radius \\(R\\) is grounded, and a point charge +q is located at 
          distance \\(d\\) from its centre (outside, so \\(d > R\\)). Sketch the induced image charge configuration and 
          find the magnitude and location of the image charge needed to satisfy the boundary conditions.
        `,
        image: (
          <img
            src="/images/electrostatics_q25.png"
            alt="Grounded conducting sphere radius R with point charge q at distance d from centre"
            className="mx-auto my-4 border"
          />
        ),
        answer: `
          By the method of images:
          • Image charge magnitude: \\(q' = -q \\cdot \\frac{R}{d}.\\)  
          • Location: along the line joining centre and +q, at distance \\(d' = \\frac{R^2}{d}\\) from the centre (inside sphere).  
          
          The potential on the sphere’s surface (grounded) is zero by construction of this image pair.
        `
      }
    ]
  },
  chemistry: {
    name: 'Chemistry',
    icon: <BookOpen className="w-6 h-6" />,
    color: 'bg-red-500',
    questions: [
      // You can populate Chemistry questions here if needed
    ]
  }
};
