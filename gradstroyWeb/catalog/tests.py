from django.test import TestCase
from catalog.models import Product
# Create your tests here.


class ProductTestCase(TestCase):
    def test_product_save(self):
        product = Product(name='lyagushka', img='lyagushka.jpg', description='лягушка', price=10000)
        product.save()

    def test_product_in_database(self):
        self.test_product_save()
        frog = Product.objects.get(name='lyagushka')
        assert frog