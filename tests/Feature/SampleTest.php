<?php

namespace Tests\Feature;

use Tests\TestCase;

class SampleTest extends TestCase
{
    public function test_example()
    {
        $response = $this->get('/'); 

        $response->assertStatus(200); 
    }
}
