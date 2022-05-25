<template>
  <div class="w-full">
    <Navbar/>
      <section id="presentation" class="max-w-screen-lg mx-auto min-h-screen md:py-20 p-3">
        <h1 class="mx-auto font-bold text-3xl">Mentions légales</h1>
        <div class="text-[#333333] text-left pt-16 mx-auto">
          <div class="pb-8">
            <h1 class="text-2xl font-bold">Éditeur du site:</h1>
            <p class="pl-2">Directeur de publication : Boudra Tristan <br>E-mail : <a class="text-amber-500 font-bold" href="mailto:boudratristan@gmail.com">boudratristan@gmail.com</a></p>
          </div>
          <div class="pb-8">
            <h1 class="text-2xl font-bold">Dévelopement du site:</h1>
            <p class="pl-2">Boudra Tristan <br/>E-mail : <a class="text-amber-500 font-bold" href="mailto:boudratristan@gmail.com">boudratristan@gmail.com</a><br/>Site internet : <a class="text-amber-500 font-bold" href="https://boudra-tristan.fr/">boudra-tristan.fr</a></p>
          </div>
          <div class="pb-8">
            <h1 class="text-2xl font-bold">Hébergement:</h1>
            <p class="pl-2">Ce site est hébergé par la société O2Switch - <a class="text-amber-500 font-bold" href="https://www.o2switch.fr/">o2switch.fr</a></p>
          </div>
          <div class="pb-8">
            <h1 class="text-2xl font-bold">Utilisation des données personnelles:</h1>
            <p class="pl-2">En utilisant le formulaire de contact du site vous acceptez le stockage des données ainsi transmise et le traitement de celles-ci. Pour toutes demandes de suppresion des données, veuiller effectuer une demande par email a : <a class="text-amber-500 font-bold" href="mailto:boudratristan@gmail.com">boudratristan@gmail.com</a></p>
          </div>
          <div class="pb-8">
            <h1 class="text-2xl font-bold">Responsabilité:</h1>
            <p class="pl-2">Dans les conditions autorisées par la loi, le directeur de la publication n'encourt aucune responsabilité : pour toute imprécision, inexactitude, omission, ou pour tous dommages résultant d'une intrusion d'un tiers ayant entraîné une modification des informations mises à disposition sur le Site, en cas de dommages provoqués à raison de l'accès d'un tiers non-autorisé sur le Site ou rendant impossible son accès. Le visiteur est informé que l'accès au Site pourra être interrompu à tout moment en raison de maintenance de sécurité ou toute autre contrainte technique.</p>
          </div>
          <div class="pb-8">
            <h1 class="text-2xl font-bold">Droit applicable:</h1>
            <p class="pl-2">Les présentes mentions sont régies par le droit français. Les juridictions françaises sont seules compétentes pour connaître tout litige se rapportant directement ou indirectement à l'accès au présent Site ou à son utilisation.</p>
          </div>
        </div>
      </section>
    <Footer/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';

export default {
  components: {
    Navbar,
    Footer,
  },
  data() {
    return {
    };
  },
};
</script>
